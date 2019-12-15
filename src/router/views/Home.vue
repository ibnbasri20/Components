<template>
<div class="xl:px-2">
  <Breadcrumb>
    <Breadcrumb-Item href="/">Home</Breadcrumb-Item>
  </Breadcrumb>
  <Row>
    <div class="w-full mb-3 px-2">
      <Card class="bg-teal-400">
        <div class="dashboard-info flex flex-wrap -mx-2">
          <div class="w-full md:w-1/2 xl:w-1/2 flex items-center">
            <h5 class="card-title text-white">SELAMAT DATANG SAEPUDIN!</h5>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/2 info-image">
          </div>
        </div>
      </Card>

    </div>

    <div class="w-full xl:w-1/2 mb-3 px-2">
      <Card class="bg-white">
        <div class="flex flex-wrap -mx-2">
          <div class="w-1/2 xl:w-1/2">
              <h6 class="fw-600">Pemasukan Hari ini</h6>
              <span class="text-muted">Rp -   150.000,- Rupiah</span>
          </div>
          <div class="w-1/2 xl:w-1/2 my-auto text-right">
            <b class="text-muted">
              12-Agustus-2019
            </b>
          </div>
        </div>
      </Card>
    </div>

    <div class="w-full xl:w-1/2 mb-3 px-2">
      <Card class="bg-white">
        <div class="flex flex-wrap -mx-2">
          <div class="w-1/2 xl:w-1/2">
              <h6 class="fw-600">Pemasukan Hari ini</h6>
              <span class="text-muted">Rp -   150.000,- Rupiah</span>
          </div>
          <div class="w-1/2 xl:w-1/2 my-auto text-right">
            <b class="text-muted">
              12-Agustus-2019
            </b>
          </div>
        </div>
      </Card>
    </div>

  </Row>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.info-image{
    height: 80px;
    background: url('../../assets/undraw_revenue_3osh.svg') center center no-repeat;
    background-size: contain;
}
</style>
