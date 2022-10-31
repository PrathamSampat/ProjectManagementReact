# from sqlalchemy import create_engine
# from sqlalchemy.orm import sessionmaker
# from sqlalchemy.ext.declarative import declarative_base
# from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, text, LargeBinary, TIMESTAMP
# from sqlalchemy.orm import relationship, Session
# import pymysql
# pymysql.install_as_MySQLdb()
# SQLALCHEMY_DB_URL = "mysql://root:mumbaicity@localhost:3306/ryr"
#
# engine = create_engine(SQLALCHEMY_DB_URL)
# SessionLocal = sessionmaker(autocommit=False, bind=engine)
# Base = declarative_base()
#
# class Employee( Base ):
#     __tablename__ = 'Employee'
#
#     employee_id = Column(Integer, primary_key=True)
#     employee_name = Column(String(50), nullable=False)
#     phone_number = Column(String(10), nullable=False)
#     email_id = Column(String(20), nullable=False, unique=True)
#     password = Column(String(8), nullable=False)
#     company_id = Column(ForeignKey('company.company_id', ondelete='CASCADE', onupdate='CASCADE'), index=True)
#     employee_profile_pic = Column(LargeBinary)
#     employee_designation = Column(String(20))
#     role_id = Column(ForeignKey('roles.role_id'), index=True)
#     create_date = Column(TIMESTAMP, server_default=text("CURRENT_TIMESTAMP"))
#     update_date = Column(TIMESTAMP, server_default=text("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"))
#
#
#
# conn = engine.connect()
# db = SessionLocal()
# temp = db.query(Employee).all()
# for emp in temp:
#     print(emp.employee_name)
# db.close()
#
#
from pydantic import BaseModel

class CompanySchema(BaseModel):
    company_id : int
    company_name : str

temp = CompanySchema(company_id = 1, company_name = "RYRC")
print(temp.dict())

class User(BaseModel):
    id: str
    name = 'Jane Doe'

user = User(id='123')
user_x = User(id='123.45')
print(user.dict())
print(user_x.dict())