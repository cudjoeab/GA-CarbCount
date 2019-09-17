# Generated by Django 2.2.3 on 2019-09-17 17:31

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('CarbCount', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Practitioner', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='CarbCount.Practitioner')),
                ('diabetic', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='CarbCount.Diabetic')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
