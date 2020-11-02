from django.db import models

# Create your models here.
STATUS = (
    (0, "Draft"),
    (1, "Publish"),
)


class Category(models.Model):
    title = models.CharField(max_length=30, unique=True)

    def __str__(self):
        return self.title


class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    title = models.CharField(max_length=50)
    photo = models.ImageField(upload_to='products')
    prize = models.CharField(max_length=20)
    updated_on = models.DateTimeField(auto_now=True)
    created_on = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(choices=STATUS, default=1)

    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.title
