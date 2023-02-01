import React from 'react';
import { GameInfo } from './game-info';
import { SystemInfo } from './system-info';
import "./App.css"

function App() {

  const games = [
    {name:"Super Mario World", system:"SNES", release:"USA", length:5, img:"https://upload.wikimedia.org/wikipedia/en/3/32/Super_Mario_World_Coverart.png"},
    {name:"The Secret of Monkey Island", system:"PC", release:"USA", length:6.5, img:"https://upload.wikimedia.org/wikipedia/en/a/a8/The_Secret_of_Monkey_Island_artwork.jpg"},
    {name:"Metal Gear 2: Solid Snake", system:"MSX2", release:"JP", length:0, img:"https://upload.wikimedia.org/wikipedia/en/1/14/Metal_Gear_2_Boxart.JPG"}, 
    {name:"F-Zero", system:"SNES", release:"USA", length:3, img:"https://upload.wikimedia.org/wikipedia/en/9/9b/SNES_F-Zero_boxart.jpg"},
    {name:"Mega Man 3", system:"NES", release:"USA", length:3.5, img:"https://upload.wikimedia.org/wikipedia/en/4/49/Megaman3_box.jpg"},
    {name:"Snake's Revenge", system:"NES", release:"USA", length:5, img:"https://upload.wikimedia.org/wikipedia/en/b/b2/NES-E2-USA-REV-A.jpg"},
    {name:"Final Fantasy III", system:"Famicom", release:"JP", length:0, img:"https://upload.wikimedia.org/wikipedia/en/8/86/Ff3cover.jpg"},
    {name:"Castle of Illusion Starring Mickey Mouse", system:"Genesis", release:"USA", length:2, img:"https://upload.wikimedia.org/wikipedia/en/f/f4/Castle_of_illusion_Mickey_mouse.jpg"},
    {name:"ActRaiser", system:"SNES", release:"USA", length:5, img:"https://www.mobygames.com/images/covers/l/170207-actraiser-snes-front-cover.jpg"},
    {name:"Dragon Quest IV", system:"NES", release:"USA", length:25, img:"https://cdn.getreplayvalue.com/products/prd-BsWrLIdg3QWkTl5GMchg/images/uR1Map69URD7bNQpuINx.png"},
  ]

  const systems = [
    {name:"Super Nintendo Entertainment System (SNES)", company:"Nintendo", year:1990, img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SNES-Mod1-Console-Set.png/300px-SNES-Mod1-Console-Set.png"},
    {name:"Microsoft Disk Operating System (MS-DOS ->(PC))", company:"Microsoft", year:1981, img:"https://computerhistory.org/wp-content/uploads/2019/08/ms-dos-ibm-pc.jpg"},
    {name:"MSX2", company:"ASCII/Microsoft", year:1985, img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Sony_HitBit_HB-10P_%28White_Background%29.jpg/220px-Sony_HitBit_HB-10P_%28White_Background%29.jpg"},
    {name:"Nintendo (NES)", company:"Nintendo", year:1985, img:"https://m.media-amazon.com/images/I/81s7B+Als-L.jpg"},
    {name:"Family Computer (Famicom)", company:"Nintendo", year:1983, img:"https://cdn.shopify.com/s/files/1/0560/9965/products/Famicom-Console-Set.png?v=1533552841"},
    {name:"Genesis", company:"Sega", year:1989, img:"https://genesismini.sega.com/img/system/genesis_mini_blueglow.png"}
  ]

  return (

    <div>
      <h1>Top Video Games from 90s</h1>
      {games.map(g => <GameInfo {...g}></GameInfo>)}
      {systems.map(s => <SystemInfo {...s}></SystemInfo>)}
    </div>

  );
}

export default App;
