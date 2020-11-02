from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.index, name='home'),
    path('shop', views.shop, name='shop'),
    path('category/<title>', views.cat_view, name='category'),
    path('product/<title>', views.pro_detail, name='detail'),
    path('faq', views.faq, name='faq'),
    path('contact', views.contact, name='contact'),
]


urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
