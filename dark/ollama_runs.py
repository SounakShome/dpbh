from langchain_community.llms import Ollama
ollama=Ollama(model="dark-pattern")
myinput="Valentine Day Shirts For Men Valentine's Day Chest Pocket Short Sleeve Casual Shirt | hardaddy Update PreferencesCountry/RegionLanguageenCurrencySign In / Registeror sign in:My OrdersMy CouponsNEWSHOP ALLHARDADDY\u00ae x ARTISTSHOLIDAYBIG SIZESALEValentine Day Shirts For Men Valentine's Day Chest Pocket Short Sleeve Casual Shirt$25.5Free gift on orders over $79Color:Black-redSize:Size GuideMLXLXXL3XL4XLProduct MeasurementShoulder: 21.65, Chest: 47.24, Sleeve Length: 9.84, Length: 28.74 (inch)Add to cartBuy it nowProduct DetailsSPU:3ZJLALBO0214Clothes Length:RegularSleeve Length:Short SleeveEdition type:LooseElasticity:Micro-ElasticitySilhouette:H-LineThickness:LightweightSize Type:Regular SizeMaterial:PolyesterActivity:Holiday,Party,Daily,CommutingNeckline:Shirt CollarPattern:Heart/CordateStyle:CasualTheme:SummerColor:Black-redSize:M,L,XL,XXL,3XL,4XLFabric:Spandex5%; Polyester95%Cuff:S:39.8,M:41,L:42.2,XL:43.4,XXL:45.2,3XL:47,4XL:48.8,5XL:50.6 SizeSleeve Length Shoulder Length Bust cminchcminchcminchcminchM259.85521.77328.712047.2L25.51056.522.27529.512649.6XL2610.25822.87730.313252XXL26.510.46023.67830.714055.13XL2710.66224.47931.114858.34XL27.510.86425.28031.515661.4Shipping & ReturnsLaundry Tips$25.5Add to cartRelated ProductsVIEW MORERelated SearchesNewsletterSubscribe to get exclusive 15% OFF NOW! And you can also receive novelties trends and promotions via email.Subscribe\u00a9 2024 hardaddy"

response=ollama.__call__(prompt=myinput)
print(response)


