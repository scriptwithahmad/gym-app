type Exercise={name:string;muscle:string;equipment:string;secondary:string;setup:string;move:string;mistake:string};const group=(muscle:string, rows:string[]):Exercise[]=>rows.map(row=>{const [name,equipment,secondary,setup,move,mistake]=row.split('|');return {name,muscle,equipment,secondary,setup,move,mistake};});
export const exercises=[...group('Chest',[
'Barbell Bench Press|Barbell|Triceps, Shoulders|Lie with feet planted, upper back supported and hands slightly wider than shoulders. Use safeties or a spotter.|Lower toward the mid-to-lower chest with wrists over elbows. Press upward until arms are comfortably straight.|Avoid bouncing the bar or losing foot contact.',
'Incline Dumbbell Press|Dumbbells|Triceps, Shoulders|Set a shallow incline, plant your feet and hold dumbbells over your upper chest.|Lower to either side of the upper chest with forearms near vertical, then press up without clanging the weights.|Avoid using an incline so steep that it becomes an overhead press.',
'Dumbbell Bench Press|Dumbbells|Triceps, Shoulders|Lie on a flat bench, feet planted, with dumbbells above the chest.|Bend elbows to bring weights beside the chest within a comfortable range, then press back over the shoulders.|Avoid letting the wrists fold backward.',
'Cable Fly|Cable|Shoulders|Stand between pulleys with a staggered stance and softly bent elbows.|Sweep your hands together in front of the chest, then slowly return until you feel a comfortable stretch.|Avoid changing elbow bend repeatedly or forcing a deep stretch.',
'Push-ups|Bodyweight|Triceps, Core|Start in a high plank with hands slightly wider than shoulders.|Bend the elbows to lower the torso as a unit; press the floor away to return. Elevate hands to make it easier.|Avoid hips sagging or head reaching forward.'
]),...group('Back',[
'Pull-ups|Bodyweight|Biceps, Forearms|Grip an overhead bar with palms facing away. Start from a comfortable hang.|Draw elbows down until chin clears the bar without craning; lower with control. Use assistance if needed.|Avoid kicking to generate momentum.',
'Lat Pulldown|Cable|Biceps, Forearms|Adjust thigh pads and grip the bar with arms comfortably overhead.|Pull elbows down and bring the bar toward the upper chest, then let arms extend slowly.|Avoid pulling behind the neck or rocking backward.',
'Seated Cable Row|Cable|Biceps, Shoulders|Sit tall with feet braced and knees soft, holding the handle with arms extended.|Draw elbows back and pull toward the lower ribs, then reach forward under control.|Avoid turning each rep into a large torso swing.',
'One-arm Dumbbell Row|Dumbbells|Biceps, Core|Support one hand on a bench and hinge until you can keep your trunk steady.|Pull the free elbow toward the hip, then lower the dumbbell to a comfortable stretch.|Avoid twisting the torso to lift higher.',
'Deadlift|Barbell|Glutes, Hamstrings|Place the bar over midfoot, hinge to grasp it, bend knees and brace before lifting.|Push through the floor and stand tall with the bar close. Hinge first on the way down, then bend knees.|Avoid jerking the bar off the floor or leaning back at lockout.'
]),...group('Shoulders',[
'Overhead Press|Barbell|Triceps, Core|Stand with feet stable, bar near upper chest and wrists stacked above elbows.|Brace and press overhead, moving the head just enough to clear the bar. Lower to the starting position.|Avoid compensating with excessive lower-back arch.',
'Dumbbell Lateral Raise|Dumbbells|Traps|Stand upright with weights at your sides and elbows slightly bent.|Raise arms slightly forward of the body to around shoulder level as comfortable, then lower smoothly.|Avoid swinging or shrugging the weights up.',
'Face Pull|Cable|Back, Traps|Set rope at face height and step back with arms extended.|Pull rope toward face, separating the ends as elbows move outward. Slowly extend arms.|Avoid leaning far back or pulling toward the waist.'
]),...group('Biceps',[
'Dumbbell Curl|Dumbbells|Forearms|Stand with weights at sides and elbows near ribs.|Bend elbows, rotating palms up if comfortable; extend elbows slowly on the way down.|Avoid swinging your torso.',
'Hammer Curl|Dumbbells|Forearms|Hold dumbbells at sides with palms facing in.|Keep palms facing each other as you bend elbows, then lower in control.|Avoid driving elbows forward to finish the rep.'
]),...group('Triceps',[
'Triceps Pushdown|Cable|Forearms|Stand close to a high pulley and tuck elbows beside the torso.|Straighten elbows without moving upper arms, then allow elbows to bend as the handle rises.|Avoid using body weight to force the handle down.',
'Overhead Triceps Extension|Dumbbells|Shoulders|Hold a dumbbell securely overhead, ribs stacked over hips.|Bend elbows to lower the weight behind the head within comfortable range, then extend elbows.|Avoid flaring the ribs or forcing shoulder position.'
]),...group('Legs',[
'Barbell Squat|Barbell|Glutes, Core|Set rack safeties and support the bar on your upper back. Find a stable stance.|Brace, bend hips and knees, and descend until you can maintain control. Push through the whole foot to stand.|Avoid collapsing the knees inward or forcing depth.',
'Goblet Squat|Dumbbells|Glutes, Core|Hold a dumbbell close to the chest and set feet at a comfortable width.|Lower between your hips with knees tracking over toes and heels down, then stand tall.|Avoid letting the load drift away from the chest.',
'Leg Press|Machine|Glutes, Hamstrings|Set the seat so hips are supported and feet are flat on the platform.|Unlock and lower until just before the hips roll off the pad, then press back smoothly.|Avoid snapping the knees straight.',
'Romanian Deadlift|Barbell|Hamstrings, Glutes|Stand tall holding the bar near thighs with soft knees.|Hinge hips backward with the bar close until hamstrings limit further movement, then stand.|Avoid chasing the floor by bending the spine.',
'Walking Lunge|Bodyweight|Glutes, Core|Stand with feet hip-width apart and take a controlled step forward.|Bend both knees comfortably, push through the front foot and step into the next rep.|Avoid crossing feet onto one narrow line.',
'Calf Raise|Bodyweight|Calves|Stand with feet parallel and use a stable support for balance.|Rise onto the balls of the feet, pause, then lower heels slowly.|Avoid bouncing or rolling ankles outward.'
]),...group('Core',[
'Plank|Bodyweight|Shoulders, Glutes|Place forearms under shoulders and extend legs behind you.|Brace gently with ribs over pelvis. Hold a straight line while breathing normally; stop when posture changes.|Avoid sagging hips or holding your breath.',
'Crunch|Bodyweight|Hip flexors|Lie with knees bent and feet planted, hands lightly supporting the head if needed.|Bring ribs toward pelvis until shoulder blades lift, then lower slowly.|Avoid pulling the neck or turning the exercise into a sit-up.',
'Mountain Climbers|Bodyweight|Shoulders, Hip flexors|Set hands below shoulders in a high plank.|Bring one knee forward without rounding excessively, return the foot, then switch sides.|Avoid bouncing hips or rushing past control.'
])];
export const groups=['Chest','Back','Shoulders','Biceps','Triceps','Legs','Core'];
