import { _decorator, Component, Node, Prefab, Vec3, NodePool, instantiate } from "cc";
const { ccclass, property } = _decorator;

@ccclass("GroundFactory")
export class GroundFactory extends Component {

    @property(Prefab)
    ground: Prefab = null;

    @property(Prefab)
    groundWithHole: Prefab = null;

    @property(Node)
    groundParent: Node = null;

    initPosition: Vec3 = new Vec3(2.817, 1.385,-13.95);
    deltaX: number = 0.898;
    deltaZ: number = 0.89;
    groundPool: NodePool = null;
    groundWithHolePool: NodePool = null;

    start () {
        // Your initialization goes here.
        this.groundPool = new NodePool();
        this.groundWithHolePool = new NodePool();
        for (let i = 0; i < 84; i++)
        {
            let rowIndex = Math.floor(i / 7);
            let columnIndex = i % 7;
            let rowDelta = rowIndex * this.deltaZ;
            let columnDelta = columnIndex * this.deltaX;
            let pos = new Vec3(0, 0, 0);
            pos.x = this.initPosition.x + columnDelta;
            pos.y = this.initPosition.y;
            pos.z = this.initPosition.z + rowDelta;
            if (i % 2 == 0)
            {
                //this.CreateGround(pos);
            }
            else
            {
                //this.CreateGroundWithHole(pos);
            }
        }
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }

    CreateGround (pos:Vec3)
    {
        let ground:Node = instantiate(this.ground);
        ground.setParent(this.groundParent);
        ground.position = pos;
    }

    GetNodeFromGroundPool ()
    {
        if (this.groundPool.size() > 0)
        {
            return this.groundPool.get();
        }
        else
        {
            return instantiate(this.ground);
        }
    }

    CreateGroundWithHole (pos:Vec3)
    {
        let ground:Node = instantiate(this.groundWithHole);
        ground.setParent(this.groundParent);
        ground.position = pos;
    }

    GetNodeFromGroundWithHolePool ()
    {
        if (this.groundWithHolePool.size() > 0)
        {
            return this.groundWithHolePool.get();
        }
        else
        {
            return instantiate(this.groundWithHole);
        }
    }
}
