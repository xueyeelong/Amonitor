# -*- coding: utf-8 -*-
# Generated by Django 1.10.8 on 2017-12-07 06:50
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dayAddApi', '0008_userrest'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='userrest',
            options={'ordering': ('registerDate', 'currentDate')},
        ),
    ]
