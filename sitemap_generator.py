import json
import xml.etree.ElementTree as ET
from xml.dom import minidom
from datetime import datetime


def generate_sitemap():
    base_url = "https://pylibs.com.br"

    # Configuração do XML
    urlset = ET.Element("urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")

    # 1. Página principal (Home)
    url_home = ET.SubElement(urlset, "url")
    ET.SubElement(url_home, "loc").text = f"{base_url}/"
    ET.SubElement(url_home, "lastmod").text = datetime.now().strftime("%Y-%m-%d")
    ET.SubElement(url_home, "priority").text = "1.0"

    # 2. Páginas de detalhes das bibliotecas
    try:
        with open("./Data/data.json", "r", encoding="utf-8") as f:
            libraries = json.load(f)

        for lib in libraries:
            lib_id = lib.get("id")
            if lib_id:
                url_node = ET.SubElement(urlset, "url")
                ET.SubElement(url_node, "loc").text = (
                    f"{base_url}/details.html?id={lib_id}"
                )
                ET.SubElement(url_node, "lastmod").text = datetime.now().strftime(
                    "%Y-%m-%d"
                )
                ET.SubElement(url_node, "priority").text = "0.8"

    except FileNotFoundError:
        print("⚠️  Aviso: data.json não encontrado. Gerando apenas para a Home.")

    # Formatação pretty-print
    xml_str = ET.tostring(urlset, encoding="utf-8")
    pretty_xml = minidom.parseString(xml_str).toprettyxml(indent="  ")

    # Salvar o arquivo
    with open("sitemap.xml", "w", encoding="utf-8") as f:
        f.write(pretty_xml)

    print("✅ sitemap.xml gerado com sucesso!")


if __name__ == "__main__":
    generate_sitemap()