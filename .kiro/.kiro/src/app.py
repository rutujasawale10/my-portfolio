def crop_advisory(soil_type, rainfall):
    if soil_type == "Black" and rainfall > 700:
        return "Recommended Crop: Cotton"
    elif soil_type == "Red" and rainfall > 500:
        return "Recommended Crop: Groundnut"
    else:
        return "Recommended Crop: Millet"

soil = "Black"
rainfall = 750

result = crop_advisory(soil, rainfall)
print(result)
