from fastapi import FastAPI

from app.database import Base, engine

# Models
from app.models.product import Product
from app.models.customer import Customer
from app.models.order import Order

# Routers
from app.database import SessionLocal
from app.models.product import Product
from app.models.customer import Customer
from app.models.order import Order
from app.routes.product import router as product_router
from app.routes.customer import router as customer_router
from app.routes.order import router as order_router

app = FastAPI(
    title="Inventory Management System",
    version="1.0.0"
)

# Create all database tables
Base.metadata.create_all(bind=engine)

# Register routes
app.include_router(product_router)
app.include_router(customer_router)
app.include_router(order_router)


@app.get("/")
def root():
    return {
        "message": "Inventory API Running"
    }


@app.get("/dashboard")
def dashboard():
    return {
        "message": "Dashboard API Working"
    }
@app.get("/dashboard")
def dashboard():

    db = SessionLocal()

    total_products = db.query(Product).count()

    total_customers = db.query(Customer).count()

    total_orders = db.query(Order).count()

    low_stock_products = db.query(Product).filter(
        Product.quantity < 5
    ).count()

    db.close()

    return {
        "total_products": total_products,
        "total_customers": total_customers,
        "total_orders": total_orders,
        "low_stock_products": low_stock_products
    }