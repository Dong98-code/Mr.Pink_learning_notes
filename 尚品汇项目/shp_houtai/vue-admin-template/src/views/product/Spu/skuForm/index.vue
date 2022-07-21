<template>
  <div>
    <el-form ref="form" label-width="80px">
      <el-form-item label="SPU名称">
        海绵宝宝
      </el-form-item>
      <!-- sku名称 -->
      <el-form-item label="SKU名称">
        <el-input placeholder="SKU名称"></el-input>
      </el-form-item>
      <el-form-item label="价格(元)">
        <el-input placeholder="价格(元)"></el-input>
      </el-form-item>
      <el-form-item label="重量(千克)">
        <el-input placeholder="重量(千克)"></el-input>
      </el-form-item>

      <el-form-item label="规格描述">
          <el-input type="textarea" placeholder="规格描述" rows="4"></el-input>
        </el-form-item>
      <!-- 平台属性 -->
      <el-form-item label="平台属性">
        <el-form :inline="true" ref="form" label-width="80px">
          <el-form-item label="屏幕尺寸">
            <el-select placeholder="请选择">
              <el-option
                label=""
                value="">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="无线通信">
            <el-select placeholder="请选择">
              <el-option
                label=""
                value="">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-form-item>
      <!-- 销售属性 -->
      <el-form-item label="图片列表">
        <el-table
          border
          style="width: 100%">
          <el-table-column
           type="selection"
            prop="prop"
            label="label"
            width="80">
          </el-table-column>
          <el-table-column
            prop="prop"
            label="图片"
            width="width">
          </el-table-column>
          <el-table-column
            prop="prop"
            label="图片名称"
            width="width">
          </el-table-column>
          <el-table-column
            prop="prop"
            label="操作"
            width="width">
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存</el-button>
        <el-button type="">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    name:'SkuForm',
    methods: {
      getData(category1Id, category2Id, spu) {
        console.log(111);
      }
    },
}
</script>

<style>

</style>