# -*- coding: utf-8 -*-

bind = '{{ gunicorn_bind }}'
pidfile = '{{ gunicorn_pidfile }}'
proc_name = 'slugify'
user = '{{ web_user }}'
loglevel = 'warn'
errorlog = '-'
accesslog = '-'
