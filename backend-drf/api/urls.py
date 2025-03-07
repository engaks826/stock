from django.urls import include, path
from accounts import views as UserViews

urlpatterns = [
    path('register/', UserViews.RegisterView.as_view()),

]
