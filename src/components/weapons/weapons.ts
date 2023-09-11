import { Weapon, WeaponCategory } from '../../interfaces/killfeed.interface';
import Repeater from '/src/assets/weapons/3030.svg';
import Sentinel from '/src/assets/weapons/sentinel.svg';

export const weapons: Record<WeaponCategory, Array<String>> = {
  'Assault Rifles': ['R-301', 'Flatline', 'Hemlok'],
  'Submachine Guns': ['R-99', 'Alternator'],
  'Sniper Rifles': ['Kraber', 'Longbow', 'Sentinel'],
  Shotguns: ['Peacekeeper', 'Mastiff'],
  'Light Machine Guns': ['Devotion', 'Spitfire'],
  Pistols: ['P2020', 'RE-45'],
  'Marksman Weapons': ['30-30 Repeater'],
};

export const weaponsWithIcons: Record<string, Array<Weapon>> = {
  'Sniper Rifles': [{ name: 'Sentinel', iconPath: Sentinel }],
  'Marksman Weapons': [{ name: '30-30 Repeater', iconPath: Repeater }],
};
