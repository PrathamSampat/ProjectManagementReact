from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
import pymysql
pymysql.install_as_MySQLdb()
SQLALCHEMY_DB_URL = "mysql://root:mumbaicity@localhost:3306/ryr"

engine = create_engine(SQLALCHEMY_DB_URL)
SessionLocal = sessionmaker(autocommit=False, bind=engine)
Base = declarative_base()
conn = engine.connect()
temp = conn.execute("select * from Company;")
print(list(temp))
