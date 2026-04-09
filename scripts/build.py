from sys import argv
import os
import shutil
import subprocess
import http.server
import socketserver
import webbrowser

subprocess.run(["npm", "run", "build"])

root_dir = argv[1]
dist_dir = f"{root_dir}/docs/.vitepress/dist"
dest_dir = f"{dist_dir}/Wiki"

os.makedirs(dest_dir)
for i in os.listdir(dist_dir):
    if i != "Wiki":
        shutil.move(f"{dist_dir}/{i}", dest_dir)


PORT = 9000
class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=dist_dir, **kwargs)

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at port {PORT}")
    webbrowser.open(f'http://localhost:{PORT}/Wiki', autoraise=True)
    httpd.serve_forever()