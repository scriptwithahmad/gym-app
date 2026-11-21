import {exercises} from './exercises';
import type {Profile} from './store';

export const equipmentOptions=['Bodyweight','Dumbbells','Barbell','Cable','Machine','Pull-up bar'];
export function availableExercise(e:typeof exercises[number], p:Profile){
  const equipment=p.equipment ?? (p.place==='Gym'?equipmentOptions:['Bodyweight']);
  if(e.name==='Pull-ups') return equipment.includes('Pull-up bar');
  return e.equipment==='Bodyweight'||equipment.includes(e.equipment);
}
export function recommendedExercises(p:Profile){
  const available=exercises.filter(e=>availableExercise(e,p));
  const groups=p.focus && p.focus!=='Full body' ? [p.focus,'Legs','Chest','Back','Shoulders','Core'] : ['Legs','Chest','Back','Shoulders','Core'];
  const result:typeof exercises=[];
  for(const group of groups){const match=available.find(e=>e.muscle===group&&!result.includes(e));if(match) result.push(match);}
  for(const e of available){if(result.length>=5) break;if(!result.includes(e))result.push(e);}
  return result.slice(0,p.duration==='30 min'?4:5);
}
