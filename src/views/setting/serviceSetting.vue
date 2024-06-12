<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <div class="grid">
                  <div class="col-8">
                    <h4><strong>서비스 이용약관 설정</strong></h4>
                    <vue-editor v-model="content"></vue-editor>
                  </div>
                  <div class="col-4">
                    <h4><strong>개정이력</strong></h4>
                    <div class="table-wrap">
                        <table class="table">
                            <tr>
                                <th>등록일</th>
                                <th>작성자</th>
                                <th></th>
                            </tr>
                            <tr v-for="item in 5" :key="item">
                                <td>22.11.11</td>
                                <td>홍길동</td>
                                <td><Button label="적용하기" /></td>
                            </tr>
                        </table>
                        <!-- <div class="table-nodata">개정이력이 없습니다</div> -->
                        <div class="p-paginator p-component mt-2">
                          <button class="p-paginator-first p-paginator-element p-link p-disabled" type="button" disabled="">
                            <i class="pi pi-angle-left"></i>
                          </button>
                          <button class="p-paginator-prev p-paginator-element p-link p-disabled" type="button" disabled="">
                            <i class="pi pi-angle-double-left"></i>
                          </button>
                          <span class="p-paginator-pages" data-pc-section="pages">
                            <button class="p-paginator-page p-paginator-element p-link p-highlight" type="button">1</button>
                            <button class="p-paginator-page p-paginator-element p-link" type="button">2</button>
                          </span>
                          <button class="p-paginator-first p-paginator-element p-link" type="button">
                            <i class="pi pi-angle-right"></i>
                          </button>
                          <button class="p-paginator-prev p-paginator-element p-link" type="button">
                            <i class="pi pi-angle-double-right"></i>
                          </button>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { VueEditor } from "vue3-editor";
export default {
    data() {
    return {
      content: '',
    };
  },
  components: { VueEditor },
  created(){},
  mounted(){},
  methods: {

  },
};
</script>
