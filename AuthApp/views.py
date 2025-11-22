import json
from django.http.response import JsonResponse
from django.shortcuts import render
from django.views import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from .models import company

class companyView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    # GET → obtener lista de compañías
    def get(self, request):
        companies = list(company.objects.values())

        if len(companies) > 0:
            datos = {'message': "Success", 'companies': companies}
        else:
            datos = {'message': "Companies not found"}

        return JsonResponse(datos)

    # POST → crear una compañía
    def post(self, request):
        jd = json.loads(request.body)

        company.objects.create(
            name=jd['name'],
            website=jd['website'],
            foundation=jd['foundation']
        )

        datos = {'message': "Success"}
        return JsonResponse(datos)

    def put(self, request):
        return JsonResponse({'message': 'PUT not implemented yet'})

    def delete(self, request):
        return JsonResponse({'message': 'DELETE not implemented yet'})
