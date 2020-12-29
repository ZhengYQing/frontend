<template>
  <div>
    <UserHeader/>
    <el-row>
      <Menu/>
      <el-col :span="16">
        <div id="caseList" v-for="(item,index) in lists" :key="index">
          <el-card :body-style="{ padding: '10px',height:'400px'}" style="margin:3% 30% 3% 5% ">
            <div class="border">
              <p class="title">病例</p>
              <p class="s_title">时 间：{{item.time}}</p>
              <p class="s_title">就诊医院：{{item.hospital}}</p>
              <p class="s_title">就诊科室：{{item.department}}</p>
              <el-divider></el-divider>
              <p class="s_title">主诉：{{item.perTell}}</p>
              <p class="s_title">诊断：{{item.diagnosis}}</p>
              <p class="s_title">治疗意见：{{item.suggestion}}</p>
              <p class="doctor">医生：{{item.doctor}}</p>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import UserHeader from '@/components/UserHeader.vue'
import Menu from '@/components/Menu.vue'
export default {
  components: {
    UserHeader,
    Menu
  },
  data () {
    return {
      // table 的假数据
      lists: [{
        hospital: '解放军总医院第五医学中心',
        department: '内科',
        time: '2020-20-27',
        perTell: '咳嗽有痰，发烧流鼻涕，嗓子疼',
        diagnosis: '扁桃体发炎，病毒性感冒',
        suggestion: '多喝水，作息规律，注意保暖。',
        doctor: '王医生'
      }, {
        hospital: '解放军总医院第五医学中心',
        department: '内科',
        time: '2020-20-27',
        perTell: '咳嗽有痰，发烧流鼻涕，嗓子疼',
        diagnosis: '扁桃体发炎，病毒性感冒',
        suggestion: '多喝水，作息规律，注意保暖。',
        doctor: '王医生'
      }]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.border{
    padding: 0 20px;
    font-size: 16px;
}
.title{
  text-align: center;
  font-size: 20px;
  padding: 20px;
  font-weight: 600;
}
.s_title{
  padding:6px 20px;
}

.Rp{
  font-family:'Times New Roman', Times, serif;
  font-weight: bold;
  font-size: 24px;
}
.doctor{
  float:right;
  padding:30px 50px;
}
</style>
