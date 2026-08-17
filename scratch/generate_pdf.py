import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Image

def generate_pdf():
    pdf_path = r"c:\Users\ASUS\OneDrive\Desktop\Portfolio\public\resume.pdf"
    image_path = r"c:\Users\ASUS\OneDrive\Desktop\Portfolio\public\resume.png"
    
    # 612 x 792 letter size with 18 margin -> printable width 576, height 756
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        rightMargin=18,
        leftMargin=18,
        topMargin=18,
        bottomMargin=18
    )
    
    story = []
    
    if os.path.exists(image_path):
        # 576 x 750 fits perfectly on 1 page
        img = Image(image_path, width=540, height=730)
        story.append(img)
    
    doc.build(story)
    print("PDF generated successfully at:", pdf_path)

if __name__ == "__main__":
    generate_pdf()
