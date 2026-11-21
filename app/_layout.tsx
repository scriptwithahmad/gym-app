if (typeof document !== 'undefined' && String(console.error).indexOf('gvSvgOrigin') < 0) {
  var __gvConsoleError = console.error;
  console.error = function gvSvgOrigin() {
    var __gvMsg = Array.prototype.join.call(arguments, ' ');
    if (__gvMsg.indexOf('Invalid DOM property') >= 0 && __gvMsg.indexOf('transform-origin') >= 0) return;
    return __gvConsoleError.apply(console, Array.prototype.slice.call(arguments));
  };
}

if (typeof document !== 'undefined' && !document.getElementById('genvibe-inspector')) {
  var __gvInspector = document.createElement('script');
  __gvInspector.id = 'genvibe-inspector';
  __gvInspector.src = 'https://genvibe.pro/inspector-script.js?v=e2b-boot1';
  document.head.appendChild(__gvInspector);
}

import { Stack, usePathname, useRouter } from 'expo-router';
import {useEffect, useState} from 'react';
import {useForge} from '../src/store';
import {View, Text, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {House, Dumbbell, Compass, ChartNoAxesColumn, UserRound} from 'lucide-react-native';
import {C} from '../src/ui';
const tabs=[['Home','/',House],['Train','/train',Dumbbell],['Explore','/explore',Compass],['Progress','/progress',ChartNoAxesColumn],['Profile','/profile',UserRound]] as const;
function Nav(){const p=usePathname();const r=useRouter();if(p==='/onboarding')return null;return <SafeAreaView edges={['bottom']} style={{backgroundColor:C.panel,borderTopWidth:1,borderColor:C.stroke}}><View style={{flexDirection:'row',width:'100%',maxWidth:720,alignSelf:'center',paddingVertical:8}}>{tabs.map(([label,path,Icon])=>{const active=p===path||(label==='Train'&&p==='/builder');return <Pressable key={path} onPress={()=>{if(p!==path)r.replace(path)}} accessibilityRole="tab" accessibilityState={{selected:active}} style={{flex:1,alignItems:'center',gap:4,minHeight:48}}><View style={{borderRadius:8,width:48,height:30,alignItems:'center',justifyContent:'center',backgroundColor:active?C.lime:'transparent'}}><Icon size={20} color={active?C.bg:C.muted}/></View><Text style={{color:active?C.lime:C.muted,fontSize:11,fontWeight:'700'}}>{label}</Text></Pressable>})}</View></SafeAreaView>}
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';

export default function RootLayout() {
  useFrameworkReady();
  const router=useRouter();
  const pathname=usePathname();
  const onboarded=useForge(s=>s.onboarded);
  const [hydrated,setHydrated]=useState(useForge.persist.hasHydrated());
  useEffect(()=>useForge.persist.onFinishHydration(()=>setHydrated(true)),[]);
  useEffect(()=>{if(hydrated&&!onboarded&&pathname!=='/onboarding') router.replace('/onboarding');},[hydrated,onboarded,pathname]);

  // Gesture handler's GestureDetector / ReanimatedSwipeable only work inside this root
  // view — without it they throw a render error on device.
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false, contentStyle:{backgroundColor:C.bg}, animation:'fade' }}>
        <Stack.Screen name="+not-found" />
      </Stack>
      <Nav />
      <StatusBar style="light" />
    </GestureHandlerRootView>
  );
}
