
//矩阵的处理

class Matrix{
    m
    constructor(matrix){
        this.m=matrix
    }

    //这里处理转置二维驻足
    /**
     * 这里处理转置二维驻足
     * cb回调函数把结果传出去
     * function(cb){
     *  
     *   cb(xx,xx,xx)
     * }
     * @param {*} cb 
     */
    forEachByMatrix(cb){
        //j是列，i是行
        // 先遍历每列，然后在遍历每行的
        //这里遍历的数组是,刚好把矩阵转置了！！！！
        // [0,0],[1,1]
        // 结果就是
        // 金属灰00
        // 青芒色10
        // 青芒色20
        // 橘黄色30
        // 七龙珠01
        // 灌篮高手11
        // 圣斗士21
        // 七龙珠31
        // 小号s02
        // 中号M12
        // 大号L22
        // 小号s32

        for (let j = 0; j < this._getColsNum(); j++) {
            for (let i = 0; i < this._getRowsNum(); i++) {
                    const element=this.m[i][j]
                    //这里用回调函数把element和i,j返回出去
                    //这里不能用reutrn 用reutrn就把循环跳出了，
                    //所以想返回值必须用回调函数
                    cb(element,i,j)               
            }
            
        }
    }

    //矩阵真正的转置  参考python 的numpy
    //转置 基本思想还是循环，计算机本质就是循环
    /***
     * 真正的转置！！！！
     */
    transpose(){
        const desArr=[]
        //还是必须从列开始，列转置后列会变成行
        for(let j=0; j<this._getColsNum(); j++){
            //这个时候就是一个二维数组
            desArr[j]=[]
            for(let i=0; i<this._getRowsNum();i++){
                desArr[j][i]=this.m[i][j]
            }

        }
        return desArr
    }

   
    /**
     * 二维数组的length就是行号
     */
    _getRowsNum(){
        //二维数组的length就是行号
        return this.m.length
    }
    /**
     * 列数就是每行的个数么
     */
    _getColsNum(){
        //其实这里应该处理一下
        return this.m[0].length
    }
}

export {
    Matrix
}