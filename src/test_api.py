# -*- coding: utf-8 -*-
import json
import unittest

from flask import url_for

from .app import app


class SlugifyTestCase(unittest.TestCase):

    def setUp(self):
        app.config['TESTING'] = True
        app.config['SERVER_NAME'] = '1234'
        self.client = app.test_client()

    def test_home(self):
        with app.app_context():
            url = url_for('home')
        rv = self.client.get(url)
        self.assertIn('<div id="app"></div>', rv.data)

    def test_slugify(self):
        with app.app_context():
            url = url_for('_slugify')
        data = {'text': 'a b c'}
        rv = self.client.post(url, data=data)
        rv_data = json.loads(rv.data)
        self.assertEqual(rv_data['text'], 'a b c')
        self.assertEqual(rv_data['slug'], 'a-b-c')

if __name__ == '__main__':
    unittest.main()
