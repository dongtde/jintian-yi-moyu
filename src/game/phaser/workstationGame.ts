import Phaser from "phaser";

export interface WorkstationGameHandle {
  resize(): void;
  destroy(): void;
}

interface SceneOptions {
  reducedMotion: boolean;
}

class WorkstationScene extends Phaser.Scene {
  private bossShadow?: Phaser.GameObjects.Rectangle;
  private spiritDots: Phaser.GameObjects.Arc[] = [];

  constructor(private readonly options: SceneOptions) {
    super("workstation");
  }

  create() {
    this.cameras.main.setBackgroundColor("rgba(0,0,0,0)");
    this.bossShadow = this.add.rectangle(-120, 82, 76, 188, 0x080909, 0.3).setDepth(5).setVisible(false);

    this.createSpiritDots();
    this.layout();
    this.startIdleMotion();
    this.scale.on("resize", this.layout, this);
  }

  private createSpiritDots() {
    for (let index = 0; index < 12; index += 1) {
      const dot = this.add
        .circle(0, 0, index % 3 === 0 ? 2.6 : 2, index % 4 === 0 ? 0xf4c86a : 0x9ff1c8, 0.62)
        .setDepth(7)
        .setBlendMode(Phaser.BlendModes.SCREEN);
      this.spiritDots.push(dot);
    }
  }

  private startIdleMotion() {
    if (this.options.reducedMotion) {
      return;
    }

    this.time.addEvent({
      delay: 8400,
      loop: true,
      callback: () => this.sweepBossShadow(),
    });

    for (const [index, dot] of this.spiritDots.entries()) {
      this.tweens.add({
        targets: dot,
        y: "-=18",
        x: `+=${index % 2 === 0 ? 9 : -9}`,
        alpha: { from: 0.08, to: 0.56 },
        duration: 2600 + index * 120,
        delay: index * 180,
        yoyo: true,
        repeat: -1,
        ease: "Sine.easeInOut",
      });
    }
  }

  private sweepBossShadow() {
    if (!this.bossShadow || this.options.reducedMotion) {
      return;
    }

    const width = this.scale.width;
    this.bossShadow.setVisible(true).setPosition(-80, this.scale.height * 0.38).setAlpha(0.06);
    this.tweens.add({
      targets: this.bossShadow,
      x: width + 90,
      alpha: { from: 0.04, to: 0.12 },
      duration: 2600,
      ease: "Sine.easeInOut",
      onComplete: () => this.bossShadow?.setVisible(false),
    });
  }

  private layout() {
    const width = this.scale.width;
    const height = this.scale.height;

    for (const [index, dot] of this.spiritDots.entries()) {
      const column = index % 6;
      const row = Math.floor(index / 6);
      dot.setPosition(width * (0.16 + column * 0.13), height * (0.19 + row * 0.23 + (index % 2) * 0.05));
    }
  }
}

export function createWorkstationGame(parent: HTMLElement, options: { reducedMotion?: boolean } = {}): WorkstationGameHandle {
  const game = new Phaser.Game({
    type: Phaser.AUTO,
    parent,
    width: Math.max(1, parent.clientWidth),
    height: Math.max(1, parent.clientHeight),
    transparent: true,
    backgroundColor: "rgba(0,0,0,0)",
    scale: {
      mode: Phaser.Scale.NONE,
      autoCenter: Phaser.Scale.NO_CENTER,
    },
    render: {
      antialias: true,
      pixelArt: false,
    },
    scene: [
      new WorkstationScene({
        reducedMotion: Boolean(options.reducedMotion),
      }),
    ],
  });

  return {
    resize() {
      game.scale.resize(Math.max(1, parent.clientWidth), Math.max(1, parent.clientHeight));
    },
    destroy() {
      game.destroy(true);
    },
  };
}
