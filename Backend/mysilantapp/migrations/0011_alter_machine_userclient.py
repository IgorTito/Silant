# Generated by Django 4.1.5 on 2023-01-24 08:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mysilantapp', '0010_claim_opertime'),
    ]

    operations = [
        migrations.AlterField(
            model_name='machine',
            name='userClient',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='client', to='mysilantapp.usersilant'),
        ),
    ]
