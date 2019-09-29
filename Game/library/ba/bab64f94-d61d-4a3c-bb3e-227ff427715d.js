"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, Node, Vec3, tweenUtil, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, ccclass, property, GameController;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      tweenUtil = _cc.tweenUtil;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "bab64+U1h1KPLs+In/0J3Fd", "GameController"); // begin GameController


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameController", GameController = (_dec = ccclass("GameController"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(GameController, _Component);

        function GameController() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, GameController);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(GameController)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "leftLift", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "rightLift", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "rightCtrlBtn", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "leftCtrlBtn", _descriptor4, babelHelpers.assertThisInitialized(_this));
          _this.leftLiftPos = new Vec3(1, 1, 1);
          _this.rightLiftPos = new Vec3(1, 1, 1);
          _this.isMove = false;
          return _this;
        }

        babelHelpers.createClass(GameController, [{
          key: "start",

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {
            // Your initialization goes here.
            this.leftCtrlBtn.on("click", this.OnLeftCtrlBtnClicked, this);
            this.rightCtrlBtn.on("click", this.OnRightCtrlBtnClicked, this);
          }
        }, {
          key: "OnLeftCtrlBtnClicked",
          value: function OnLeftCtrlBtnClicked() {
            var _this2 = this;

            Vec3.copy(this.leftLiftPos, this.leftLift.position);
            var move = this.leftLift.position.x + 0.1;
            var targetPos = new Vec3(move, this.leftLift.position.y, this.leftLift.position.z);
            this.isMove = true;
            tweenUtil(this.leftLiftPos).to(0.1, targetPos, {
              easing: "Linear-None"
            }).start().call(function () {
              _this2.isMove = false;
            });
          }
        }, {
          key: "OnRightCtrlBtnClicked",
          value: function OnRightCtrlBtnClicked() {}
        }, {
          key: "update",
          value: function update(deltaTime) {
            // Your update function goes here.
            // let move = this.leftLift.position.x + 0.01;
            // let targetPos = new Vec3(move, this.leftLift.position.y, this.leftLift.position.z);
            // this.leftLift.position = targetPos;
            if (!this.isMove) {
              return;
            }

            console.log(this.leftLiftPos);
            this.leftLift.position = new Vec3(this.leftLiftPos.x, this.leftLiftPos.y, this.leftLiftPos.z);
          }
        }]);
        return GameController;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "leftLift", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "rightLift", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "rightCtrlBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "leftCtrlBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end GameController

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL1NjcmlwdC9HYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlZlYzMiLCJ0d2VlblV0aWwiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHYW1lQ29udHJvbGxlciIsImxlZnRMaWZ0UG9zIiwicmlnaHRMaWZ0UG9zIiwiaXNNb3ZlIiwibGVmdEN0cmxCdG4iLCJvbiIsIk9uTGVmdEN0cmxCdG5DbGlja2VkIiwicmlnaHRDdHJsQnRuIiwiT25SaWdodEN0cmxCdG5DbGlja2VkIiwiY29weSIsImxlZnRMaWZ0IiwicG9zaXRpb24iLCJtb3ZlIiwieCIsInRhcmdldFBvcyIsInkiLCJ6IiwidG8iLCJlYXNpbmciLCJzdGFydCIsImNhbGwiLCJkZWx0YVRpbWUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLFMsT0FBQUEsUzs7O3FGQUU2Qjs7O0FBRGpFQyxNQUFBQSxPLEdBQXNCTCxVLENBQXRCSyxPO0FBQVNDLE1BQUFBLFEsR0FBYU4sVSxDQUFiTSxROztnQ0FHSkMsYyxXQURaRixPQUFPLENBQUMsZ0JBQUQsQyxVQUlIQyxRQUFRLENBQUNKLElBQUQsQyxVQUdSSSxRQUFRLENBQUNKLElBQUQsQyxVQUdSSSxRQUFRLENBQUNKLElBQUQsQyxVQUdSSSxRQUFRLENBQUNKLElBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUdUTSxXLEdBQW9CLElBQUlMLElBQUosQ0FBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsQztnQkFDcEJNLFksR0FBcUIsSUFBSU4sSUFBSixDQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixDO2dCQUdyQk8sTSxHQUFrQixLOzs7Ozs7O0FBQ2xCO0FBQ0E7QUFDQTtrQ0FFUztBQUNMO0FBQ0EsaUJBQUtDLFdBQUwsQ0FBaUJDLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCLEtBQUtDLG9CQUFsQyxFQUF3RCxJQUF4RDtBQUNBLGlCQUFLQyxZQUFMLENBQWtCRixFQUFsQixDQUFxQixPQUFyQixFQUE4QixLQUFLRyxxQkFBbkMsRUFBMEQsSUFBMUQ7QUFDSDs7O2lEQUdEO0FBQUE7O0FBQ0laLFlBQUFBLElBQUksQ0FBQ2EsSUFBTCxDQUFVLEtBQUtSLFdBQWYsRUFBNEIsS0FBS1MsUUFBTCxDQUFjQyxRQUExQztBQUNBLGdCQUFJQyxJQUFJLEdBQUcsS0FBS0YsUUFBTCxDQUFjQyxRQUFkLENBQXVCRSxDQUF2QixHQUEyQixHQUF0QztBQUNBLGdCQUFJQyxTQUFTLEdBQUcsSUFBSWxCLElBQUosQ0FBU2dCLElBQVQsRUFBZSxLQUFLRixRQUFMLENBQWNDLFFBQWQsQ0FBdUJJLENBQXRDLEVBQXlDLEtBQUtMLFFBQUwsQ0FBY0MsUUFBZCxDQUF1QkssQ0FBaEUsQ0FBaEI7QUFDQSxpQkFBS2IsTUFBTCxHQUFjLElBQWQ7QUFDQU4sWUFBQUEsU0FBUyxDQUFDLEtBQUtJLFdBQU4sQ0FBVCxDQUE0QmdCLEVBQTVCLENBQStCLEdBQS9CLEVBQW9DSCxTQUFwQyxFQUErQztBQUFDSSxjQUFBQSxNQUFNLEVBQUM7QUFBUixhQUEvQyxFQUF1RUMsS0FBdkUsR0FBK0VDLElBQS9FLENBQW9GLFlBQUk7QUFDcEYsY0FBQSxNQUFJLENBQUNqQixNQUFMLEdBQWMsS0FBZDtBQUNILGFBRkQ7QUFHSDs7O2tEQUdELENBRUM7OztpQ0FFT2tCLFMsRUFBbUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBSSxDQUFDLEtBQUtsQixNQUFWLEVBQ0E7QUFDSTtBQUNIOztBQUNEbUIsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS3RCLFdBQWpCO0FBQ0EsaUJBQUtTLFFBQUwsQ0FBY0MsUUFBZCxHQUF5QixJQUFJZixJQUFKLENBQVMsS0FBS0ssV0FBTCxDQUFpQlksQ0FBMUIsRUFBNkIsS0FBS1osV0FBTCxDQUFpQmMsQ0FBOUMsRUFBaUQsS0FBS2QsV0FBTCxDQUFpQmUsQ0FBbEUsQ0FBekI7QUFDSDs7O1FBekQrQnRCLFM7Ozs7O2lCQUlmLEk7Ozs7Ozs7aUJBR0MsSTs7Ozs7OztpQkFHRyxJOzs7Ozs7O2lCQUdELEk7Ozs7b0JBZk4iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFZlYzMsIHR3ZWVuVXRpbCwgZGlyZWN0b3IsIERpcmVjdG9yIH0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIkdhbWVDb250cm9sbGVyXCIpXHJcbmV4cG9ydCBjbGFzcyBHYW1lQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cclxuICAgIC8vIGR1bW15ID0gJyc7XHJcbiAgICBAcHJvcGVydHkoTm9kZSlcclxuICAgIGxlZnRMaWZ0OiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoTm9kZSlcclxuICAgIHJpZ2h0TGlmdDogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KE5vZGUpXHJcbiAgICByaWdodEN0cmxCdG46IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShOb2RlKVxyXG4gICAgbGVmdEN0cmxCdG46IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIGxlZnRMaWZ0UG9zOiBWZWMzID0gbmV3IFZlYzMoMSwxLDEpO1xyXG4gICAgcmlnaHRMaWZ0UG9zOiBWZWMzID0gbmV3IFZlYzMoMSwxLDEpO1xyXG5cclxuXHJcbiAgICBpc01vdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICB0aGlzLmxlZnRDdHJsQnRuLm9uKFwiY2xpY2tcIiwgdGhpcy5PbkxlZnRDdHJsQnRuQ2xpY2tlZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5yaWdodEN0cmxCdG4ub24oXCJjbGlja1wiLCB0aGlzLk9uUmlnaHRDdHJsQnRuQ2xpY2tlZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgT25MZWZ0Q3RybEJ0bkNsaWNrZWQgKClcclxuICAgIHtcclxuICAgICAgICBWZWMzLmNvcHkodGhpcy5sZWZ0TGlmdFBvcywgdGhpcy5sZWZ0TGlmdC5wb3NpdGlvbik7XHJcbiAgICAgICAgbGV0IG1vdmUgPSB0aGlzLmxlZnRMaWZ0LnBvc2l0aW9uLnggKyAwLjE7XHJcbiAgICAgICAgbGV0IHRhcmdldFBvcyA9IG5ldyBWZWMzKG1vdmUsIHRoaXMubGVmdExpZnQucG9zaXRpb24ueSwgdGhpcy5sZWZ0TGlmdC5wb3NpdGlvbi56KTtcclxuICAgICAgICB0aGlzLmlzTW92ZSA9IHRydWU7XHJcbiAgICAgICAgdHdlZW5VdGlsKHRoaXMubGVmdExpZnRQb3MpLnRvKDAuMSwgdGFyZ2V0UG9zLCB7ZWFzaW5nOlwiTGluZWFyLU5vbmVcIn0pLnN0YXJ0KCkuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmlzTW92ZSA9IGZhbHNlOyBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBPblJpZ2h0Q3RybEJ0bkNsaWNrZWQgKClcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICAvLyBsZXQgbW92ZSA9IHRoaXMubGVmdExpZnQucG9zaXRpb24ueCArIDAuMDE7XHJcbiAgICAgICAgLy8gbGV0IHRhcmdldFBvcyA9IG5ldyBWZWMzKG1vdmUsIHRoaXMubGVmdExpZnQucG9zaXRpb24ueSwgdGhpcy5sZWZ0TGlmdC5wb3NpdGlvbi56KTtcclxuICAgICAgICAvLyB0aGlzLmxlZnRMaWZ0LnBvc2l0aW9uID0gdGFyZ2V0UG9zO1xyXG4gICAgICAgIGlmICghdGhpcy5pc01vdmUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGVmdExpZnRQb3MpO1xyXG4gICAgICAgIHRoaXMubGVmdExpZnQucG9zaXRpb24gPSBuZXcgVmVjMyh0aGlzLmxlZnRMaWZ0UG9zLngsIHRoaXMubGVmdExpZnRQb3MueSwgdGhpcy5sZWZ0TGlmdFBvcy56KTtcclxuICAgIH1cclxufVxyXG4iXX0=