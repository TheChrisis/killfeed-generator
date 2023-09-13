import { Weapon, WeaponCategory } from '../../interfaces/killfeed.interface';
import Repeater from '/src/assets/weapons/3030.svg';
import Sentinel from '/src/assets/weapons/sentinel.svg';
import Alternator from '/src/assets/weapons/alternator.svg';
import Bocek from '/src/assets/weapons/bocek.svg';
import Car from '/src/assets/weapons/car.svg';
import ChargeRifle from '/src/assets/weapons/chargerifle.svg';
import Devotion from '/src/assets/weapons/devotion.svg';
import Eva8 from '/src/assets/weapons/eva8.svg';
import Scout from '/src/assets/weapons/scout.svg';
import Havoc from '/src/assets/weapons/havoc.svg';
import Hemlok from '/src/assets/weapons/hemlok.svg';
import Kraber from '/src/assets/weapons/kraber.svg';
import Lstar from '/src/assets/weapons/lstar.svg';
import Longbow from '/src/assets/weapons/longbow.svg';
import Spitfire from '/src/assets/weapons/spitfire.svg';

export const weapons: Record<WeaponCategory, Array<String>> = {
  'Assault Rifles': ['R-301', 'Flatline', 'Hemlok', 'Havok'],
  'Submachine Guns': ['R-99', 'Alternator', 'Car', 'Volt'],
  'Sniper Rifles': ['Kraber', 'Longbow', 'Sentinel', 'Charge Rifle'],
  Shotguns: ['Peacekeeper', 'Mastiff'],
  'Light Machine Guns': ['Devotion', 'M600 Spitfire', 'L-STAR EMG'],
  Pistols: ['P2020', 'RE-45'],
  'Marksman Weapons': ['30-30 Repeater', 'Bocek Compound Bow', 'G7 Scout'],
};

export const weaponsWithIcons: Record<string, Array<Weapon>> = {
  'Assault Rifles': [
    { name: 'HAVOC', iconPath: Havoc },
    { name: 'Hemlok', iconPath: Hemlok },
  ],
  'Sniper Rifles': [
    { name: 'Sentinel', iconPath: Sentinel },
    { name: 'Longbow DMR', iconPath: Longbow },
    { name: 'Charge Rifle', iconPath: ChargeRifle },
    { name: 'Kraber', iconPath: Kraber },
  ],
  'Marksman Weapons': [
    { name: '30-30 Repeater', iconPath: Repeater },
    { name: 'G7 Scout', iconPath: Scout },
    { name: 'Bocek Compound Bow', iconPath: Bocek },
  ],
  'Submachine Guns': [
    { name: 'Alternator', iconPath: Alternator },
    { name: 'C.A.R. SMG', iconPath: Car },
  ],
  'Light Machine Guns': [
    { name: 'M600 Spitfire', iconPath: Spitfire },
    { name: 'Devotion', iconPath: Devotion },
    { name: 'L-STAR EMG', iconPath: Lstar },
  ],
  Shotguns: [{ name: 'EVA-8 Auto', iconPath: Eva8 }],
};
