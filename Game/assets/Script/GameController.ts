import { _decorator, Component, Node, Vec3, tweenUtil, director, Director } from "cc";
const { ccclass, property } = _decorator;

@ccclass("GameController")
export class GameController extends Component {
    /* class member could be defined like this */
    // dummy = '';
    @property(Node)
    leftLift: Node = null;

    @property(Node)
    rightLift: Node = null;

    @property(Node)
    rightCtrlBtn: Node = null;

    @property(Node)
    leftCtrlBtn: Node = null;

    leftLiftPos: Vec3 = new Vec3(1,1,1);
    rightLiftPos: Vec3 = new Vec3(1,1,1);


    isMove: boolean = false;
    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    start () {
        // Your initialization goes here.
        this.leftCtrlBtn.on("click", this.OnLeftCtrlBtnClicked, this);
        this.rightCtrlBtn.on("click", this.OnRightCtrlBtnClicked, this);
    }

    OnLeftCtrlBtnClicked ()
    {
        Vec3.copy(this.leftLiftPos, this.leftLift.position);
        let move = this.leftLift.position.x + 0.1;
        let targetPos = new Vec3(move, this.leftLift.position.y, this.leftLift.position.z);
        this.isMove = true;
        tweenUtil(this.leftLiftPos).to(0.1, targetPos, {easing:"Linear-None"}).start().call(()=>{
            this.isMove = false; 
        });
    }

    OnRightCtrlBtnClicked ()
    {

    }

    update (deltaTime: number) {
        // Your update function goes here.
        // let move = this.leftLift.position.x + 0.01;
        // let targetPos = new Vec3(move, this.leftLift.position.y, this.leftLift.position.z);
        // this.leftLift.position = targetPos;
        if (!this.isMove)
        {
            return;
        }
        console.log(this.leftLiftPos);
        this.leftLift.position = new Vec3(this.leftLiftPos.x, this.leftLiftPos.y, this.leftLiftPos.z);
    }
}
