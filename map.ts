const map1 = [
    [1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1],

]

export namespace tw {
    export class Point {
        public hang: number;
        public lie: number;

        constructor(hang: number, lie: number) {
            this.hang = hang;
            this.lie = lie
        }
    }

    export class Map {
        private arr: any[];

        private max_hang: number;
        private max_lie: number;

        constructor(int_arr: any[]) {
            this.arr = int_arr;

            this.max_hang = this.arr.length;
            this.max_lie = this.arr[0].length;
        }

        findPath(start: Point, end: Point): any[] {
            return [start, end]
        }

    }

    export class Finder {

        private _closeList: Point[];
        private _openList: any[];

        constructor(){
            this._closeList = [];
            this._openList = [];
        }

        private isEndInCloseList(pt:Point) : boolean{
            for(let x of this._closeList){
                if(x.hang === pt.hang && x.lie === pt.lie){
                    return true;
                }
            }

            return false;
        }

        public start(map: any, startPt: Point, endPt: Point): any[] {

            // 将起点加入close 列表
            this._closeList.push(startPt);

            while(!this.isEndInCloseList(endPt)){
                //拿到close表的最一个结点
            }


            return [];
        }
    }
};


let aa = 100;

let newMap = new tw.Map(map1);
let newPath = newMap.findPath(new tw.Point(4, 1), new tw.Point(4, 4));

// let start = new Point(4, 1)
// let end = new Point(4, 4)
// newMap.xunlu(start, end)
console.log(newMap);
