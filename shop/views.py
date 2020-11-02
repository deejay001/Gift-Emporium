from django.shortcuts import render, get_object_or_404
from .models import Category, Product

# Create your views here.


def index(request):
    souvenir = cat_post('Souvenirs')

    utensils = cat_post('Utensils')

    prom = cat_post('Promo')

    hotel = cat_post('hotels')

    decor = cat_post('Decorations')

    cat = Category.objects.all()

    general = Product.objects.filter(status=1).order_by('-created_on')[:4]
    rec1 = Product.objects.filter(status=1).order_by('-created_on')[:8]

    return render(request, 'index.html', {'cat': cat,
                                          'souvenirs': souvenir,
                                          'general': general,
                                          'utensils': utensils,
                                          'hotels': hotel,
                                          'decor': decor,
                                          'prom': prom,
                                          'rec1': rec1,
                                          })


def shop(request):
    products = Product.objects.filter(status=1).order_by('-created_on')
    return render(request, 'shop.html', {'products': products})


def cat_post(title):
    categor = get_object_or_404(Category, title=title)
    posts = categor.products.filter(status=1).order_by('-created_on')[:8]
    return posts


def pro_detail(request, title):
    cat = Category.objects.all()

    product = get_object_or_404(Product, title=title)

    rec1 = Product.objects.filter(status=1).order_by('?')[:3]
    rec2 = Product.objects.filter(status=1).order_by('?')[:3]

    return render(request, 'detail.html', {'pro': product,
                                           'cat': cat,
                                           'rec1': rec1,
                                           'rec2': rec2,
                                           })


def cat_view(request, title):
    cate = Category.objects.all()
    cat = None

    if title == 'Shop':
        products = Product.objects.filter(status=1).order_by('-created_on')

    else:
        cat = get_object_or_404(Category, title=title)
        products = cat.products.filter(status=1).order_by('-created_on')

    return render(request, 'cat_view.html', {'products': products,
                                             'cat': cate,
                                             'cate': cat,
                                             })


def faq(request):
    cat = Category.objects.all()
    return render(request, 'faq.html', {'cat': cat})


def contact(request):
    cat = Category.objects.all()

    return render(request, 'contact.html', {'cat': cat})
