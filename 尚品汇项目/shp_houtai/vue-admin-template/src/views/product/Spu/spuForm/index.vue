<template>
  <div>
    <el-form ref="form" label-width="80px">
      <el-form-item label="SPU名称">
        <el-input placeholder="SPU名称"></el-input>
      </el-form-item>
      <!-- 品牌 -->
      <el-form-item label="品牌">
        <el-select placeholder="请选择品牌">
          <el-option label="" value=""></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="SPU描述">
        <el-input placeholder="SPU描述" type="textarea" rows="4"></el-input>
      </el-form-item>
      <!-- 图片  照片墙上传-->
      <el-form-item label="SPU图片">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </el-form-item>
      <!-- 销售属性 -->
      <el-form-item label="销售属性">
        <el-select placeholder="还有3未选择">
          <el-option value="" label=""> </el-option>
        </el-select>
        <el-button type="primary" icon="el-icon-plus" style="margin-left:10px">添加销售属性名称</el-button
        >
        <el-table style="width: 100%" border>
          <el-table-column type="index" label="序号" width="80">
          </el-table-column>
          <el-table-column prop="prop" label="属性名"> </el-table-column>
          <el-table-column prop="prop" label="属性名称列表"> </el-table-column>
          <el-table-column prop="prop" label="操作"> </el-table-column>

        </el-table>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存</el-button>
        <el-button type="" @click="cancel">取消</el-button>

      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "SpuForm",
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,

      tradeMarkList: [], //存储品牌信息
      spuImageList: [], //存储SPU图片的数据
      saleAttrList: [], //销售属性的数据（项目全部的销售属性）
      attrIdAndAttrName: "", //收集未选择的销售属性的id
    };
  },
  methods: {
    handleRemove(file, fileList) {
      // console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 取消 按钮的回调 改变 scene
    cancel() {
      this.$emit("changeScene", 0);
    },
    async initSpuData(spu) {
      // console.log(spu);
      // spu.id 
      // tmid为品牌的id
      let spuResult = await this.$API.spu.reqSpu(spu.id);
      if (spuResult.code == 200) {
        //在修改spu的时候,需要向服务器发请求的，把服务器返回的数据（对象），赋值给spu属性
        this.spu = spuResult.data;
      }
      //获取品牌的信息
      let tradeMarkResult = await this.$API.spu.reqTradeMarkList();
      if (tradeMarkResult.code == 200) {
        this.tradeMarkList = tradeMarkResult.data;
      }
      //获取spu图片的数据
      let spuImageResult = await this.$API.spu.reqSpuImageList(spu.id);
      if (spuImageResult.code == 200) {
        let listArr = spuImageResult.data;
        //由于照片墙显示图片的数据需要数组，数组里面的元素需要有name与url字段
        //需要把服务器返回的数据进行修改
        listArr.forEach((item) => {
          item.name = item.imgName;
          item.url = item.imgUrl;
        });
        //把整理好的数据赋值给
        this.spuImageList = listArr;
      }
      //获取平台全部的销售属性
      let saleResult = await this.$API.spu.reqBaseSaleAttrList();
      if (saleResult.code == 200) {
        this.saleAttrList = saleResult.data;
      }
    }
  },
};
</script>

<style>
</style>