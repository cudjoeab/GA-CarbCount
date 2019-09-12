import logging
import os

from django.views.generic import View
from django.http import HttpResponse
from django.conf import settings



from fatsecret import Fatsecret
fs = Fatsecret(consumer_key, consumer_secret)


def search_for_recipe(self, query):
    # Search for recipe on remote api
    return fs.foods_search(query) 


class FrontendAppView(View):
    """
    Serves the compiled frontend entry point (only works if you have run `yarn
    run build`).
    """

    def get(self, request):
        try:
            with open(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html')) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            logging.exception('Production build of app not found')
            return HttpResponse(
                """
                This URL is only used when you have built the production
                version of the app. Visit http://localhost:3000/ instead, or
                run `yarn run build` to test the production version.
                """,
                status=501,
            )
    
    # def signup(request):
    #     form = UserCreationForm()
    #     context = { 'form': form }
    #     response = render(request, '') 