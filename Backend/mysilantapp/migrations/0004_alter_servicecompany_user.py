# Generated by Django 4.1.5 on 2023-01-19 22:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mysilantapp', '0003_usersilant'),
    ]

    operations = [
        migrations.AlterField(
            model_name='servicecompany',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='mysilantapp.usersilant'),
        ),
    ]
