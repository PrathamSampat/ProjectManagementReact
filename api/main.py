import uvicorn
from fastapi import FastAPI, Depends, HTTPException, status, Form
from typing import List
from sqlalchemy.engine.cursor import LegacyCursorResult
from pydantic.schema import datetime
from sqlalchemy import Column, DECIMAL, DateTime, ForeignKey, Integer, LargeBinary, String, TIMESTAMP, Table, text
from sqlalchemy.orm import relationship, Session
from sqlalchemy.dialects.mysql import BIT

from database import Base, engine, SessionLocal, conn
from pydantic import BaseModel
from starlette.middleware.cors import CORSMiddleware

Base.metadata.create_all(bind=engine)
metadata = Base.metadata

origins = [
    'http://localhost:3000'
]

# ServiceMaster table class
class ServiceMaster(Base):
    __tablename__ = 'service_master'

    service_id = Column(Integer, primary_key=True)
    service_name = Column(String(25), nullable=False, unique=True)

# ServiceMaster table schema
class ServiceMasterSchema(BaseModel):
    service_id : int
    service_name : str

# StatusMaster table class
class StatusMaster(Base):
    __tablename__ = 'status_master'

    status_id = Column(Integer, primary_key=True)
    status = Column(String(7), nullable=False, unique=True)

# StatusMaster table schema
class StatusMasterSchema(BaseModel):
    status_id : int
    status : str

# Company table class
class Company(Base):
    __tablename__ = 'company'

    company_id = Column(Integer, primary_key=True)
    company_name = Column(String(40), nullable=False, unique=True)
    company_data = Column(ForeignKey('company_data_master.data_type_id'), index=True)
    create_date = Column(TIMESTAMP, server_default=text("CURRENT_TIMESTAMP"))
    update_date = Column(TIMESTAMP, server_default=text("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"))

    company_data_master = relationship('CompanyDataMaster')

# Company table schema
class CompanySchema(BaseModel):
    company_id : int
    company_name : str
    # class Config:
    #     orm_mode = True



t_service_logs = Table(
    'service_logs', metadata,
    Column('session_id', ForeignKey('session_logs.session_id', ondelete='CASCADE', onupdate='CASCADE'), index=True),
    Column('status_id', ForeignKey('status_master.status_id'), index=True),
    Column('service_id', ForeignKey('service_master.service_id'), index=True),
    Column('output', String(225)),
    Column('execution_time', DECIMAL(5, 2)),
    Column('create_date', TIMESTAMP, server_default=text("CURRENT_TIMESTAMP"))
)

class serviceLogsSchema(BaseModel):
    exectution_time : datetime
    create_date : datetime



class Employee(Base):
    __tablename__ = 'employee'
    employee_id = Column(Integer, primary_key=True)
    employee_name = Column(String(50), nullable=False)
    phone_number = Column(String(10), nullable=False)
    email_id = Column(String(20), nullable=False, unique=True)
    password = Column(String(8), nullable=False)
    company_id = Column(ForeignKey('company.company_id', ondelete='CASCADE', onupdate='CASCADE'), index=True)
    employee_profile_pic = Column(LargeBinary)
    employee_designation = Column(String(20))
    role_id = Column(ForeignKey('roles.role_id'), index=True)
    create_date = Column(TIMESTAMP, server_default=text("CURRENT_TIMESTAMP"))
    update_date = Column(TIMESTAMP, server_default=text("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"))
    company = relationship('Company')
    role = relationship('Role')




class EmployeeSchema(BaseModel):
    employee_id: int
    employee_name: str
    phone_number: str
    email_id: str
    password: str
    company_id: int
    employee_profile_pic: bytes
    employee_designation: str
    role_id: int
    # create_date: datetime
    # update_date: datetime

    class Config:
        orm_mode = True




def get_db():
    # db = SessionLocal()
    conn = engine.connect()
    try:
        yield conn
    finally:
        conn.close()

app = FastAPI()
@app.get("/employees", response_model=List[EmployeeSchema])
async def read_data(conn:LegacyCursorResult=Depends(get_db)):
    employee_table_data = list(conn.execute("select * from Employee;"))
    print("temp", employee_table_data)
    username = [i[3] for i in employee_table_data]
    print(username)
    password = [i[4] for i in employee_table_data]
    print(password)
    if not ( username ):
        raise HTTPException(
            status_code=404,
            detail="user not found",
        )
    return employee_table_data

@app.get("/company", response_model= List[CompanySchema])
async def read_data_company(conn:LegacyCursorResult=Depends(get_db)):
    company_data = list(conn.execute("select * from company;"))
    print("company", company_data)
    return company_data

@app.get("/servicemaster", response_model=List[ServiceMasterSchema])
async def read_data_service(conn:LegacyCursorResult=Depends(get_db)):
    service_data = list(conn.execute("select * from service_master;"))
    print("service", service_data)
    return service_data

@app.get("/servicelogs", response_model=List[serviceLogsSchema])
async def read_data_service(conn:LegacyCursorResult=Depends(get_db)):
    service_logs_data = list(conn.execute("select * from service_logs;"))
    print("service logs", service_logs_data)
    return service_logs_data

@app.post("/login/", response_model=List[EmployeeSchema])
async def login(username: str = Form(...), password: str = Form(...),conn:LegacyCursorResult=Depends(get_db)):
    print(username)
    print(f"select password from employee where email_id='{username}';")
    employee_password = conn.execute(f"select password from employee where email_id='{username}';").fetchone()[0]
    if employee_password == "":
        raise HTTPException(
            status_code=404,
            detail="user not found",
        )
    elif employee_password != password:
        raise HTTPException(
            status_code=403,
            detail="incorrect password",
        )
    elif employee_password == password:
        raise HTTPException(
            status_code=200,
            detail="success",
        )
    return {"username": username, "password": password}

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['GET'],
    allow_headers=['Content-Type','application/xml']
)

if __name__ == "__main__":
    uvicorn.run(app)