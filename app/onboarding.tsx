import {useState} from 'react';
import {View,Text} from 'react-native';
import {useRouter} from 'expo-router';
import {Brand,Btn,Card,Chip,Field,Heading,Hero,Label,Muted,Page,S} from '../src/ui';
import {line,profile,useForge,type Profile} from '../src/store';
import {equipmentOptions,recommendedExercises} from '../src/personalization';

function heightInCm(input:string){
 const value=input.trim();
 if(/^\d+(?:[.,]\d+)?$/.test(value)) return Number(value.replace(',','.'));
 const imperial=value.match(/^(\d+)\s*['’′]\s*(\d{1,2})\s*["”″]?$/);
 if(!imperial||Number(imperial[2])>=12)return NaN;
 return Math.round((Number(imperial[1])*12+Number(imperial[2]))*25.4)/10;
}
const positive=(value:number)=>Number.isFinite(value)&&value>0;

export default function Onboarding(){
 const r=useRouter(); const current=useForge(s=>s.profile); const [p,set]=useState<Profile>({...profile,...current}); const [step,go]=useState(0); const [days,sd]=useState<number[]>(current.trainingDays??[1,3,5]); const [error,err]=useState('');
 const put=(k:keyof Profile,v:string)=>set(x=>({...x,[k]:v}));
 const choices=(k:keyof Profile,options:string[])=><View style={S.cluster}>{options.map(o=><Chip key={o} title={o} active={p[k]===o} onPress={()=>put(k,o)}/>)}</View>;
 const equipment=p.equipment??['Bodyweight']; const names=recommendedExercises(p);
 const toggleEquipment=(item:string)=>set(x=>({...x,equipment:item==='Bodyweight'?equipment:equipment.includes(item)?equipment.filter(e=>e!==item):[...equipment,item]}));
 const changePlace=(place:string)=>set(x=>({...x,place,equipment:place==='Gym'?[...equipmentOptions]:['Bodyweight']}));
 return <Page><Brand/><Label>SETUP  /  {step+1} OF 7</Label>{step===0?<Hero><Text style={S.title}>Build Strength.{'\n'}Track Progress.{'\n'}Become Better.</Text><Muted>A plan made for your space, your equipment and your goals.</Muted></Hero>:<Heading tag="YOUR TRAINING PROFILE" title={['','Tell us about you','What are you working toward?','Your experience','Where do you train?','Make it fit','Your starting routine'][step]} sub="Your answers stay on this device and can be changed later."/>}
 {step===1&&<Card><Field label="Name" value={p.name} onChange={v=>put('name',v)}/><Field label="Age (optional)" numeric value={p.age} onChange={v=>put('age',v)}/><Field label="Height (cm)" numeric value={p.height} onChange={v=>put('height',v)}/><Field label={`Weight (${p.unit})`} numeric value={p.weight} onChange={v=>put('weight',v)}/><Muted>Weight units</Muted>{choices('unit',['kg','lb'])}</Card>}
 {step===2&&choices('goal',['Build Muscle','Gain Weight','Lose Fat','Increase Strength','Improve Endurance','General Fitness','Maintain Fitness'])}
 {step===3&&choices('level',['Beginner','Intermediate','Advanced'])}
 {step===4&&<><Card><Label>TRAINING SPACE</Label><Muted>Choose the setting you use most often.</Muted><View style={S.cluster}>{['Gym','Home'].map(x=><Chip key={x} title={x} active={p.place===x} onPress={()=>changePlace(x)}/>)}</View></Card><Card><Label>AVAILABLE EQUIPMENT</Label><Muted>Select what you have. No equipment? Leave only Bodyweight selected.</Muted><View style={S.cluster}>{equipmentOptions.map(x=><Chip key={x} title={x} active={equipment.includes(x)} onPress={()=>toggleEquipment(x)}/>)}</View><Muted>Bodyweight movements are always available.</Muted></Card></>}
 {step===5&&<><Card><Label>TRAINING DAYS</Label><Muted>Choose the days that fit your week.</Muted><View style={S.cluster}>{['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((v,i)=><Chip key={v} title={v} active={days.includes(i)} onPress={()=>sd(days.includes(i)?days.filter(x=>x!==i):[...days,i])}/>)}</View></Card><Card><Label>SESSION LENGTH</Label>{choices('duration',['30 min','45 min','60 min'])}<Label>PRIORITY</Label>{choices('focus',['Full body','Chest','Back','Shoulders','Legs','Core'])}<Field label="Limitations or notes (optional)" value={p.limitations??''} onChange={v=>put('limitations',v)}/><Muted>Notes are for your reference; recommendations do not assess injuries. Consult a qualified professional when needed.</Muted></Card></>}
 {step===6&&<Card><Label>YOUR STARTING POINT · {days.length} DAYS / WEEK</Label><Muted>Selected for your available equipment. Edit this routine anytime in Train.</Muted>{names.map(e=><Text key={e.name} style={S.text}>•  {e.name} · {p.level==='Beginner'?2:3} sets</Text>)}<Muted>{p.place} · {equipment.join(', ')} · {p.duration}</Muted></Card>}
 {!!error&&<Muted>{error}</Muted>}<Btn title={step===0?'Get started':step===6?'Save and open FORGE':'Continue'} arrow onPress={()=>{err('');if(step===1&&(!p.name.trim()||!p.height||!p.weight||[p.age,p.height,p.weight].some(v=>v&&(!Number.isFinite(+v)||+v<=0))))return err('Enter your name, height and weight using positive numbers.');if(step===5&&!days.length)return err('Select at least one training day.');if(step<6)go(step+1);else{useForge.setState(s=>({profile:{...p,name:p.name.trim(),days:String(days.length),trainingDays:days},onboarded:true,plans:[{id:'personal',name:p.place==='Home'?'Home Strength':'Your Strength Routine',days,lines:names.map(e=>({...line(e.name),sets:p.level==='Beginner'?2:3}))},...s.plans.filter(x=>x.id!=='personal')]}));r.replace('/');}}}/>{step>0&&<Btn secondary title="Back" onPress={()=>go(step-1)}/>}</Page>;
}
