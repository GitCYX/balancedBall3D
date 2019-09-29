"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, Node, Prefab, Vec3, NodePool, instantiate, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, ccclass, property, GroundFactory;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
      NodePool = _cc.NodePool;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "929721vIWBLaJj2IdAJXeso", "GroundFactory"); // begin GroundFactory


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GroundFactory", GroundFactory = (_dec = ccclass("GroundFactory"), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Node), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(GroundFactory, _Component);

        function GroundFactory() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, GroundFactory);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(GroundFactory)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "ground", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "groundWithHole", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "groundParent", _descriptor3, babelHelpers.assertThisInitialized(_this));
          _this.initPosition = new Vec3(2.817, 1.385, -13.95);
          _this.deltaX = 0.898;
          _this.deltaZ = 0.89;
          _this.groundPool = null;
          _this.groundWithHolePool = null;
          return _this;
        }

        babelHelpers.createClass(GroundFactory, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            this.groundPool = new NodePool();
            this.groundWithHolePool = new NodePool();

            for (var i = 0; i < 84; i++) {
              var rowIndex = Math.floor(i / 7);
              var columnIndex = i % 7;
              var rowDelta = rowIndex * this.deltaZ;
              var columnDelta = columnIndex * this.deltaX;
              var pos = new Vec3(0, 0, 0);
              pos.x = this.initPosition.x + columnDelta;
              pos.y = this.initPosition.y;
              pos.z = this.initPosition.z + rowDelta;

              if (i % 2 == 0) {//this.CreateGround(pos);
              } else {//this.CreateGroundWithHole(pos);
                }
            }
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }, {
          key: "CreateGround",
          value: function CreateGround(pos) {
            var ground = instantiate(this.ground);
            ground.setParent(this.groundParent);
            ground.position = pos;
          }
        }, {
          key: "GetNodeFromGroundPool",
          value: function GetNodeFromGroundPool() {
            if (this.groundPool.size() > 0) {
              return this.groundPool.get();
            } else {
              return instantiate(this.ground);
            }
          }
        }, {
          key: "CreateGroundWithHole",
          value: function CreateGroundWithHole(pos) {
            var ground = instantiate(this.groundWithHole);
            ground.setParent(this.groundParent);
            ground.position = pos;
          }
        }, {
          key: "GetNodeFromGroundWithHolePool",
          value: function GetNodeFromGroundWithHolePool() {
            if (this.groundWithHolePool.size() > 0) {
              return this.groundWithHolePool.get();
            } else {
              return instantiate(this.groundWithHole);
            }
          }
        }]);
        return GroundFactory;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "ground", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "groundWithHole", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "groundParent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end GroundFactory

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL1NjcmlwdC9Hcm91bmRGYWN0b3J5LnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiUHJlZmFiIiwiVmVjMyIsIk5vZGVQb29sIiwiaW5zdGFudGlhdGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHcm91bmRGYWN0b3J5IiwiaW5pdFBvc2l0aW9uIiwiZGVsdGFYIiwiZGVsdGFaIiwiZ3JvdW5kUG9vbCIsImdyb3VuZFdpdGhIb2xlUG9vbCIsImkiLCJyb3dJbmRleCIsIk1hdGgiLCJmbG9vciIsImNvbHVtbkluZGV4Iiwicm93RGVsdGEiLCJjb2x1bW5EZWx0YSIsInBvcyIsIngiLCJ5IiwieiIsImdyb3VuZCIsInNldFBhcmVudCIsImdyb3VuZFBhcmVudCIsInBvc2l0aW9uIiwic2l6ZSIsImdldCIsImdyb3VuZFdpdGhIb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsUSxPQUFBQSxRO0FBQVVDLE1BQUFBLFcsT0FBQUEsVzs7O29GQUVXOzs7QUFEakVDLE1BQUFBLE8sR0FBc0JQLFUsQ0FBdEJPLE87QUFBU0MsTUFBQUEsUSxHQUFhUixVLENBQWJRLFE7OytCQUdKQyxhLFdBRFpGLE9BQU8sQ0FBQyxlQUFELEMsVUFHSEMsUUFBUSxDQUFDTCxNQUFELEMsVUFHUkssUUFBUSxDQUFDTCxNQUFELEMsVUFHUkssUUFBUSxDQUFDTixJQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUdUUSxZLEdBQXFCLElBQUlOLElBQUosQ0FBUyxLQUFULEVBQWdCLEtBQWhCLEVBQXNCLENBQUMsS0FBdkIsQztnQkFDckJPLE0sR0FBaUIsSztnQkFDakJDLE0sR0FBaUIsSTtnQkFDakJDLFUsR0FBdUIsSTtnQkFDdkJDLGtCLEdBQStCLEk7Ozs7OztrQ0FFdEI7QUFDTDtBQUNBLGlCQUFLRCxVQUFMLEdBQWtCLElBQUlSLFFBQUosRUFBbEI7QUFDQSxpQkFBS1Msa0JBQUwsR0FBMEIsSUFBSVQsUUFBSixFQUExQjs7QUFDQSxpQkFBSyxJQUFJVSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQ0E7QUFDSSxrQkFBSUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsQ0FBQyxHQUFHLENBQWYsQ0FBZjtBQUNBLGtCQUFJSSxXQUFXLEdBQUdKLENBQUMsR0FBRyxDQUF0QjtBQUNBLGtCQUFJSyxRQUFRLEdBQUdKLFFBQVEsR0FBRyxLQUFLSixNQUEvQjtBQUNBLGtCQUFJUyxXQUFXLEdBQUdGLFdBQVcsR0FBRyxLQUFLUixNQUFyQztBQUNBLGtCQUFJVyxHQUFHLEdBQUcsSUFBSWxCLElBQUosQ0FBUyxDQUFULEVBQVksQ0FBWixFQUFlLENBQWYsQ0FBVjtBQUNBa0IsY0FBQUEsR0FBRyxDQUFDQyxDQUFKLEdBQVEsS0FBS2IsWUFBTCxDQUFrQmEsQ0FBbEIsR0FBc0JGLFdBQTlCO0FBQ0FDLGNBQUFBLEdBQUcsQ0FBQ0UsQ0FBSixHQUFRLEtBQUtkLFlBQUwsQ0FBa0JjLENBQTFCO0FBQ0FGLGNBQUFBLEdBQUcsQ0FBQ0csQ0FBSixHQUFRLEtBQUtmLFlBQUwsQ0FBa0JlLENBQWxCLEdBQXNCTCxRQUE5Qjs7QUFDQSxrQkFBSUwsQ0FBQyxHQUFHLENBQUosSUFBUyxDQUFiLEVBQ0EsQ0FDSTtBQUNILGVBSEQsTUFLQSxDQUNJO0FBQ0g7QUFDSjtBQUNKLFcsQ0FFRDtBQUNBO0FBQ0E7Ozs7dUNBRWNPLEcsRUFDZDtBQUNJLGdCQUFJSSxNQUFXLEdBQUdwQixXQUFXLENBQUMsS0FBS29CLE1BQU4sQ0FBN0I7QUFDQUEsWUFBQUEsTUFBTSxDQUFDQyxTQUFQLENBQWlCLEtBQUtDLFlBQXRCO0FBQ0FGLFlBQUFBLE1BQU0sQ0FBQ0csUUFBUCxHQUFrQlAsR0FBbEI7QUFDSDs7O2tEQUdEO0FBQ0ksZ0JBQUksS0FBS1QsVUFBTCxDQUFnQmlCLElBQWhCLEtBQXlCLENBQTdCLEVBQ0E7QUFDSSxxQkFBTyxLQUFLakIsVUFBTCxDQUFnQmtCLEdBQWhCLEVBQVA7QUFDSCxhQUhELE1BS0E7QUFDSSxxQkFBT3pCLFdBQVcsQ0FBQyxLQUFLb0IsTUFBTixDQUFsQjtBQUNIO0FBQ0o7OzsrQ0FFcUJKLEcsRUFDdEI7QUFDSSxnQkFBSUksTUFBVyxHQUFHcEIsV0FBVyxDQUFDLEtBQUswQixjQUFOLENBQTdCO0FBQ0FOLFlBQUFBLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQixLQUFLQyxZQUF0QjtBQUNBRixZQUFBQSxNQUFNLENBQUNHLFFBQVAsR0FBa0JQLEdBQWxCO0FBQ0g7OzswREFHRDtBQUNJLGdCQUFJLEtBQUtSLGtCQUFMLENBQXdCZ0IsSUFBeEIsS0FBaUMsQ0FBckMsRUFDQTtBQUNJLHFCQUFPLEtBQUtoQixrQkFBTCxDQUF3QmlCLEdBQXhCLEVBQVA7QUFDSCxhQUhELE1BS0E7QUFDSSxxQkFBT3pCLFdBQVcsQ0FBQyxLQUFLMEIsY0FBTixDQUFsQjtBQUNIO0FBQ0o7OztRQWxGOEIvQixTOzs7OztpQkFHZCxJOzs7Ozs7O2lCQUdRLEk7Ozs7Ozs7aUJBR0osSTs7OztvQkFYUCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgUHJlZmFiLCBWZWMzLCBOb2RlUG9vbCwgaW5zdGFudGlhdGUgfSBmcm9tIFwiY2NcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiR3JvdW5kRmFjdG9yeVwiKVxyXG5leHBvcnQgY2xhc3MgR3JvdW5kRmFjdG9yeSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KFByZWZhYilcclxuICAgIGdyb3VuZDogUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoUHJlZmFiKVxyXG4gICAgZ3JvdW5kV2l0aEhvbGU6IFByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KE5vZGUpXHJcbiAgICBncm91bmRQYXJlbnQ6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIGluaXRQb3NpdGlvbjogVmVjMyA9IG5ldyBWZWMzKDIuODE3LCAxLjM4NSwtMTMuOTUpO1xyXG4gICAgZGVsdGFYOiBudW1iZXIgPSAwLjg5ODtcclxuICAgIGRlbHRhWjogbnVtYmVyID0gMC44OTtcclxuICAgIGdyb3VuZFBvb2w6IE5vZGVQb29sID0gbnVsbDtcclxuICAgIGdyb3VuZFdpdGhIb2xlUG9vbDogTm9kZVBvb2wgPSBudWxsO1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICB0aGlzLmdyb3VuZFBvb2wgPSBuZXcgTm9kZVBvb2woKTtcclxuICAgICAgICB0aGlzLmdyb3VuZFdpdGhIb2xlUG9vbCA9IG5ldyBOb2RlUG9vbCgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODQ7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByb3dJbmRleCA9IE1hdGguZmxvb3IoaSAvIDcpO1xyXG4gICAgICAgICAgICBsZXQgY29sdW1uSW5kZXggPSBpICUgNztcclxuICAgICAgICAgICAgbGV0IHJvd0RlbHRhID0gcm93SW5kZXggKiB0aGlzLmRlbHRhWjtcclxuICAgICAgICAgICAgbGV0IGNvbHVtbkRlbHRhID0gY29sdW1uSW5kZXggKiB0aGlzLmRlbHRhWDtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IG5ldyBWZWMzKDAsIDAsIDApO1xyXG4gICAgICAgICAgICBwb3MueCA9IHRoaXMuaW5pdFBvc2l0aW9uLnggKyBjb2x1bW5EZWx0YTtcclxuICAgICAgICAgICAgcG9zLnkgPSB0aGlzLmluaXRQb3NpdGlvbi55O1xyXG4gICAgICAgICAgICBwb3MueiA9IHRoaXMuaW5pdFBvc2l0aW9uLnogKyByb3dEZWx0YTtcclxuICAgICAgICAgICAgaWYgKGkgJSAyID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5DcmVhdGVHcm91bmQocG9zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5DcmVhdGVHcm91bmRXaXRoSG9sZShwb3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgQ3JlYXRlR3JvdW5kIChwb3M6VmVjMylcclxuICAgIHtcclxuICAgICAgICBsZXQgZ3JvdW5kOk5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmdyb3VuZCk7XHJcbiAgICAgICAgZ3JvdW5kLnNldFBhcmVudCh0aGlzLmdyb3VuZFBhcmVudCk7XHJcbiAgICAgICAgZ3JvdW5kLnBvc2l0aW9uID0gcG9zO1xyXG4gICAgfVxyXG5cclxuICAgIEdldE5vZGVGcm9tR3JvdW5kUG9vbCAoKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmdyb3VuZFBvb2wuc2l6ZSgpID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyb3VuZFBvb2wuZ2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW50aWF0ZSh0aGlzLmdyb3VuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIENyZWF0ZUdyb3VuZFdpdGhIb2xlIChwb3M6VmVjMylcclxuICAgIHtcclxuICAgICAgICBsZXQgZ3JvdW5kOk5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmdyb3VuZFdpdGhIb2xlKTtcclxuICAgICAgICBncm91bmQuc2V0UGFyZW50KHRoaXMuZ3JvdW5kUGFyZW50KTtcclxuICAgICAgICBncm91bmQucG9zaXRpb24gPSBwb3M7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0Tm9kZUZyb21Hcm91bmRXaXRoSG9sZVBvb2wgKClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5ncm91bmRXaXRoSG9sZVBvb2wuc2l6ZSgpID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyb3VuZFdpdGhIb2xlUG9vbC5nZXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbnRpYXRlKHRoaXMuZ3JvdW5kV2l0aEhvbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=