<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h4><strong>상품문의</strong></h4>
                <div class="input-wrap">
                    <label class="label">이름</label>
                    <InputText type="text" placeholder="placeholder" :disabled="true"></InputText>
                </div>
                <div class="input-wrap">
                    <label class="label">이메일</label>
                    <InputText type="text" placeholder="placeholder" :disabled="true"></InputText>
                </div>
                <div class="input-wrap">
                    <label class="label">휴대폰</label>
                    <InputText type="text" placeholder="placeholder" :disabled="true"></InputText>
                </div>
                <div class="input-wrap">
                    <label class="label">제목</label>
                    <InputText type="text" placeholder="placeholder"></InputText>
                </div>
                <div class="input-wrap">
                    <label class="label">질문</label>
                    <Textarea inputId="textarea" rows="3" cols="60" :autoResize="true" v-model="value"></Textarea>
                </div>
                <div class="input-wrap">
                    <label class="label">답변</label>
                    <Textarea inputId="textarea" rows="3" cols="60" :autoResize="true" v-model="value2"></Textarea>
                </div>

                <div class="btn-wrap">
                    <Button label="목록" severity="secondary" class="lg" />
                    <Button label="확인" class="lg" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
    return {
        value: '문의입니다',
        value2: '',
    };
  },
  components: {},
  created(){},
  mounted() {
    
  },
  methods: {
  },
};
</script>


<style>

</style>