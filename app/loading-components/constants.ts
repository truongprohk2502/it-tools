import { BALL_SPINNER_CODE } from "./_codes/ball";
import { BARS_SPINNER_CODE } from "./_codes/bars";
import { CIRCLE_SPINNER_CODE } from "./_codes/circle";
import { CLAP_SPINNER_CODE } from "./_codes/clap";
import { CLASSIC_SPINNER_CODE } from "./_codes/classic";
import { COMB_SPINNER_CODE } from "./_codes/comb";
import { CUBE_SPINNER_CODE } from "./_codes/cube";
import { DOMINO_SPINNER_CODE } from "./_codes/domino";
import { FILL_SPINNER_CODE } from "./_codes/fill";
import { FIREWORK_SPINNER_CODE } from "./_codes/firework";
import { FLAG_SPINNER_CODE } from "./_codes/flag";
import { FLAPPER_SPINNER_CODE } from "./_codes/flapper";
import { GOO_SPINNER_CODE } from "./_codes/goo";
import { GRID_SPINNER_CODE } from "./_codes/grid";
import { GUARD_SPINNER_CODE } from "./_codes/guard";
import { HEART_SPINNER_CODE } from "./_codes/heart";
import { HOOP_SPINNER_CODE } from "./_codes/hoop";
import { IMPULSE_SPINNER_CODE } from "./_codes/impulse";
import { JELLYFISH_SPINNER_CODE } from "./_codes/jellyfish";
import { MAGIC_SPINNER_CODE } from "./_codes/magic";
import { METRO_SPINNER_CODE } from "./_codes/metro";
import { PONG_SPINNER_CODE } from "./_codes/pong";
import { PULSE_SPINNER_CODE } from "./_codes/pulse";
import { PUSH_SPINNER_CODE } from "./_codes/push";
import { RAINBOW_SPINNER_CODE } from "./_codes/rainbow";
import { RING_SPINNER_CODE } from "./_codes/ring";
import { ROTATE_SPINNER_CODE } from "./_codes/rotate";
import { SEQUENCE_SPINNER_CODE } from "./_codes/sequence";
import { SPHERE_SPINNER_CODE } from "./_codes/sphere";
import { SPIRAL_SPINNER_CODE } from "./_codes/spiral";
import { STAGE_SPINNER_CODE } from "./_codes/stage";
import { SWAP_SPINNER_CODE } from "./_codes/swap";
import { SWISH_SPINNER_CODE } from "./_codes/swish";
import { WAVE_SPINNER_CODE } from "./_codes/wave";
import { WHISPER_SPINNER_CODE } from "./_codes/whisper";
import BallSpinner from "./_libs/ball";
import BarsSpinner from "./_libs/bars";
import CircleSpinner from "./_libs/circle";
import ClapSpinner from "./_libs/clap";
import ClassicSpinner from "./_libs/classic";
import CombSpinner from "./_libs/comb";
import CubeSpinner from "./_libs/cube";
import DominoSpinner from "./_libs/domino";
import FillSpinner from "./_libs/fill";
import FireworkSpinner from "./_libs/firework";
import FlagSpinner from "./_libs/flag";
import FlapperSpinner from "./_libs/flapper";
import GooSpinner from "./_libs/goo";
import GridSpinner from "./_libs/grid";
import GuardSpinner from "./_libs/guard";
import HeartSpinner from "./_libs/heart";
import HoopSpinner from "./_libs/hoop";
import ImpulseSpinner from "./_libs/impulse";
import JellyfishSpinner from "./_libs/jellyfish";
import MagicSpinner from "./_libs/magic";
import MetroSpinner from "./_libs/metro";
import PongSpinner from "./_libs/pong";
import PulseSpinner from "./_libs/pulse";
import PushSpinner from "./_libs/push";
import RainbowSpinner from "./_libs/rainbow";
import RingSpinner from "./_libs/ring";
import RotateSpinner from "./_libs/rotate";
import SequenceSpinner from "./_libs/sequence";
import SphereSpinner from "./_libs/sphere";
import SpiralSpinner from "./_libs/spiral";
import StageSpinner from "./_libs/stage";
import SwapSpinner from "./_libs/swap";
import SwishSpinner from "./_libs/swish";
import WaveSpinner from "./_libs/wave";
import WhisperSpinner from "./_libs/whisper";

export const SPINNERS = [
  { name: "Ball", component: BallSpinner, code: BALL_SPINNER_CODE },
  { name: "Swap", component: SwapSpinner, code: SWAP_SPINNER_CODE },
  { name: "Bars", component: BarsSpinner, code: BARS_SPINNER_CODE },
  { name: "Clap", component: ClapSpinner, code: CLAP_SPINNER_CODE },
  { name: "Grid", component: GridSpinner, code: GRID_SPINNER_CODE },
  { name: "Wave", component: WaveSpinner, code: WAVE_SPINNER_CODE },
  { name: "Push", component: PushSpinner, code: PUSH_SPINNER_CODE },
  { name: "Firework", component: FireworkSpinner, code: FIREWORK_SPINNER_CODE },
  { name: "Stage", component: StageSpinner, code: STAGE_SPINNER_CODE },
  { name: "Ring", component: RingSpinner, code: RING_SPINNER_CODE },
  { name: "Heart", component: HeartSpinner, code: HEART_SPINNER_CODE },
  { name: "Guard", component: GuardSpinner, code: GUARD_SPINNER_CODE },
  { name: "Circle", component: CircleSpinner, code: CIRCLE_SPINNER_CODE },
  { name: "Rotate", component: RotateSpinner, code: ROTATE_SPINNER_CODE },
  { name: "Spiral", component: SpiralSpinner, code: SPIRAL_SPINNER_CODE },
  { name: "Pulse", component: PulseSpinner, code: PULSE_SPINNER_CODE },
  { name: "Swish", component: SwishSpinner, code: SWISH_SPINNER_CODE },
  { name: "Sequence", component: SequenceSpinner, code: SEQUENCE_SPINNER_CODE },
  { name: "Impulse", component: ImpulseSpinner, code: IMPULSE_SPINNER_CODE },
  { name: "Cube", component: CubeSpinner, code: CUBE_SPINNER_CODE },
  { name: "Magic", component: MagicSpinner, code: MAGIC_SPINNER_CODE },
  { name: "Flag", component: FlagSpinner, code: FLAG_SPINNER_CODE },
  { name: "Fill", component: FillSpinner, code: FILL_SPINNER_CODE },
  { name: "Sphere", component: SphereSpinner, code: SPHERE_SPINNER_CODE },
  { name: "Domino", component: DominoSpinner, code: DOMINO_SPINNER_CODE },
  { name: "Goo", component: GooSpinner, code: GOO_SPINNER_CODE },
  { name: "Comb", component: CombSpinner, code: COMB_SPINNER_CODE },
  { name: "Pong", component: PongSpinner, code: PONG_SPINNER_CODE },
  { name: "Rainbow", component: RainbowSpinner, code: RAINBOW_SPINNER_CODE },
  { name: "Hoop", component: HoopSpinner, code: HOOP_SPINNER_CODE },
  { name: "Flapper", component: FlapperSpinner, code: FLAPPER_SPINNER_CODE },
  {
    name: "Jellyfish",
    component: JellyfishSpinner,
    code: JELLYFISH_SPINNER_CODE,
  },
  { name: "Classic", component: ClassicSpinner, code: CLASSIC_SPINNER_CODE },
  { name: "Whisper", component: WhisperSpinner, code: WHISPER_SPINNER_CODE },
  { name: "Metro", component: MetroSpinner, code: METRO_SPINNER_CODE },
];
