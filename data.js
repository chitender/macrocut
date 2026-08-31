export const TARGET={protein:170,carbs:80,fat:50};
const M={
 egg:{name:'Egg & Veg Omelette',foods:['2 whole eggs','250 g egg whites','150 g mushrooms + spinach','100 g low-fat Greek yogurt'],macro:{protein:42,carbs:18,fat:14}},
 yogurt:{name:'Protein Yogurt Bowl',foods:['250 g low-fat Greek yogurt','1 scoop whey isolate','100 g berries','10 g chia seeds'],macro:{protein:40,carbs:24,fat:9}},
 oats:{name:'Training-Day Oats',foods:['30 g oats','1 scoop whey isolate','150 g low-fat Greek yogurt','50 g berries','Cinnamon'],macro:{protein:42,carbs:30,fat:8}},
 chickenL:{name:'Grilled Chicken Salad',foods:['180 g cooked chicken breast','250 g cucumber + tomato + lettuce','100 g low-fat curd','5 g olive oil'],macro:{protein:48,carbs:22,fat:13}},
 tikka:{name:'Chicken Tikka Plate',foods:['190 g chicken tikka, no butter/cream','Large cucumber + onion + tomato salad','100 g low-fat curd','Mint + lemon'],macro:{protein:52,carbs:20,fat:13}},
 prawnL:{name:'Prawn Power Bowl',foods:['220 g grilled prawns','250 g mixed salad vegetables','100 g low-fat curd','10 g olive oil'],macro:{protein:50,carbs:20,fat:15}},
 fishL:{name:'Tandoori Fish + Salad',foods:['220 g lean fish','250 g salad','100 g low-fat curd','5 g olive oil'],macro:{protein:48,carbs:20,fat:14}},
 whey:{name:'Whey + Berries',foods:['1 scoop whey isolate','100 g berries','Water / unsweetened coffee'],macro:{protein:28,carbs:12,fat:3}},
 yogurtS:{name:'Greek Yogurt Protein Snack',foods:['180 g low-fat Greek yogurt','1/2 scoop whey isolate','Cinnamon'],macro:{protein:30,carbs:12,fat:4}},
 whiteFish:{name:'Lean Fish + Green Vegetables',foods:['220 g grilled white fish','300 g broccoli + beans + capsicum','15 g olive oil'],macro:{protein:50,carbs:26,fat:20}},
 chickenD:{name:'Chicken + Cauliflower Rice',foods:['180 g cooked chicken breast','250 g cauliflower rice','200 g mixed non-starchy vegetables','12 g olive oil'],macro:{protein:52,carbs:18,fat:24}},
 salmon:{name:'Salmon + Greens',foods:['190 g salmon','300 g spinach + zucchini + broccoli','Lemon + herbs'],macro:{protein:48,carbs:20,fat:24}},
 prawnD:{name:'Prawn Stir Fry',foods:['220 g prawns','300 g mixed non-starchy vegetables','12 g olive oil','Garlic + chilli + lemon'],macro:{protein:50,carbs:24,fat:20}}
};
const T=[[M.egg,M.chickenL,M.whey,M.whiteFish],[M.yogurt,M.tikka,M.yogurtS,M.salmon],[M.oats,M.prawnL,M.whey,M.chickenD],[M.egg,M.fishL,M.yogurtS,M.chickenD],[M.yogurt,M.chickenL,M.whey,M.prawnD],[M.egg,M.tikka,M.yogurtS,M.salmon],[M.oats,M.fishL,M.whey,M.whiteFish],[M.egg,M.prawnL,M.whey,M.chickenD],[M.yogurt,M.chickenL,M.yogurtS,M.salmon],[M.oats,M.tikka,M.whey,M.prawnD],[M.egg,M.fishL,M.whey,M.whiteFish],[M.yogurt,M.prawnL,M.yogurtS,M.chickenD],[M.egg,M.chickenL,M.yogurtS,M.salmon],[M.oats,M.fishL,M.whey,M.prawnD]];
export const DAYS=Array.from({length:60},(_,i)=>({day:i+1,week:Math.floor(i/7)+1,meals:T[i%T.length].map(x=>({name:x.name,foods:[...x.foods],macro:{...x.macro}}))}));
export const SWAPS=[['Chicken breast','Lean white fish','Prawns'],['Salmon','Pomfret','Chicken + measured olive oil'],['Oats','Berries + yogurt','1 small high-fibre roti'],['Greek yogurt','Hung curd','Skyr'],['Olive oil','Measured avocado','Measured nuts/seeds']];
export const GROCERY={protein:[['Chicken','1.4–1.7 kg'],['Lean fish','1.0–1.3 kg'],['Salmon / fatty fish','400–600 g'],['Prawns','500–700 g'],['Eggs','14–18'],['Egg whites','~1.5 kg equivalent'],['Whey isolate','8–10 scoops'],['Greek yogurt / curd','2.0–2.5 kg']],produce:[['Broccoli / cauliflower','1.5–2.0 kg'],['Spinach / greens','700–900 g'],['Mushrooms','500–700 g'],['Cucumber / tomato / lettuce','2.0–2.5 kg'],['Capsicum / beans / zucchini','1.2–1.5 kg'],['Berries','600–800 g'],['Lemon / herbs','1 weekly bundle']],pantry:[['Oats','250 g'],['Chia seeds','100 g'],['Olive oil','250 ml'],['Spices / garlic','As needed']]};
export const calories=m=>m.protein*4+m.carbs*4+m.fat*9;
export const total=d=>d.meals.reduce((a,x)=>({protein:a.protein+x.macro.protein,carbs:a.carbs+x.macro.carbs,fat:a.fat+x.macro.fat}),{protein:0,carbs:0,fat:0});
