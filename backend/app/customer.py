from pydantic import BaseModel

class CustomerCreate(BaseModel):
    full_name: str
    email: str
    phone: str