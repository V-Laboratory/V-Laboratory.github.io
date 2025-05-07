from pdf2image import convert_from_path

def pdf_to_thumbnail(pdf_path, output_path):
    try:
        images = convert_from_path(pdf_path, first_page=1, last_page=1)
        image = images[0]
        image.save(output_path, 'JPEG')
        print(f"Thumbnail saved to {output_path}")
    except Exception as e:
        print(f"Error generating thumbnail: {e}")

pdf_path = "/home/vlab/2411.17190v5.pdf"
output_path = "./thumbnail.jpg"

pdf_to_thumbnail(pdf_path, output_path)
