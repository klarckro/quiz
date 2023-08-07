// Sounds - Bad
import bad_ameno from '../assets/audio/fx/bad_ameno.mp3'
import bad_priceisright from '../assets/audio/fx/bad_priceisright.mp3'
import bad_nelson from '../assets/audio/fx/bad_nelson.mp3'
import bad_violin from '../assets/audio/fx/bad_violin.mp3'
import bad_mario from '../assets/audio/fx/bad_mario.mp3'
import bad_sunny from '../assets/audio/fx/bad_sunny.mp3'
import bad_gta from '../assets/audio/fx/bad_gta.mp3'
import bad_wololo from '../assets/audio/fx/bad_wololo.mp3'
// Imports - Good
import good_sax from '../assets/audio/fx/good_sax.mp3'
import good_whisper from '../assets/audio/fx/good_whisper.mp3'
import good_wow from '../assets/audio/fx/good_wow.mp3'
import good_helicopter from '../assets/audio/fx/good_helicopter.mp3'
import good_cheer from '../assets/audio/fx/good_cheer.mp3'
import good_trololol from '../assets/audio/fx/good_trololol.mp3'
import good_sieni from '../assets/audio/fx/good_sieni.mp3'

// Sounds - Bad
const soundAmeno = new Audio(bad_ameno);
const soundPriceIsRight = new Audio(bad_priceisright);
const soundNelson = new Audio(bad_nelson);
const soundViolin = new Audio(bad_violin);
const soundMario = new Audio(bad_mario);
const soundSunny = new Audio(bad_sunny);
const soundGta = new Audio(bad_gta);
const soundWololo = new Audio(bad_wololo);

// Sounds - Good
const soundSax = new Audio(good_sax);
const soundWhisper = new Audio(good_whisper);
const soundWow = new Audio(good_wow);
const soundHelicopter = new Audio(good_helicopter);
const soundCheer = new Audio(good_cheer);
const soundTrololol = new Audio(good_trololol);
const soundSieni = new Audio(good_sieni);

const audioSad = [soundAmeno, soundPriceIsRight, soundNelson, soundViolin, soundMario, soundSunny, soundGta, soundWololo];
const audioGood = [soundSax, soundWhisper, soundWow, soundHelicopter, soundCheer, soundTrololol, soundSieni];

export default {
	audioGood,
	audioSad
}
