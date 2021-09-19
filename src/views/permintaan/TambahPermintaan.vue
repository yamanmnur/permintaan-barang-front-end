<style scoped>
    .multiselect--active {
    z-index: 10 !important;
    }
</style>
<template>
    <CCard>
      <CCardHeader
        style="background: #1a3665; color: white"
        class="d-flex align-items-center font-weight-bold"
      >
        Tambah Permintaan Barang
        
      </CCardHeader>
      <CCardBody>
         <form @submit.prevent="postData">
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="no_izin" class="font-weight-bold">NIK Perminta</label>
                <multiselect
                  label="nik"
                  placeholder="Pilih Peminta"
                  @select="pilihUser"                  
                  v-model="formData.modelPeminta"
                  :options="peminta"     

                ></multiselect>
              </div>
              <div class="form-group col-md-4">
                <label for="no_izin" class="font-weight-bold">Nama</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="formData.nama"
                  readonly
                />
              </div>
              <div class="form-group col-md-4">
                <label for="no_izin" class="font-weight-bold">Departemen</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="formData.departemen"
                  readonly
                />
              </div>
              <div class="form-group col-md-12">
                <label for="nama_kap" class="font-weight-bold">Tanggal Permintaan</label>
                <input
                  type="date"
                  class="form-control"
                  required
                  v-model="formData.tanggal_permintaan"
                />
              </div>
               
            </div>
            <div class="form-row">
                <table class="table">
                    <tr>
                        <th>Barang</th>
                        <th>Lokasi</th>
                        <th>Tersedia</th>
                        <th>Kuantiti</th>
                        <th>Satuan</th>
                        <th>Keterangan</th>
                        <th>Status</th>
                        <th>Aksi</th>
                    </tr>
                    <tr v-for="(item, index) in formData.items" :key="index">
                        <td>
                            <multiselect
                            label="nama"
                            placeholder="Pilih Barang"
                            @input="(value) => pilihBarang(index,value)"
                            v-model="item.modelBarang"
                            :options="barang"     

                            ></multiselect>
                        </td>
                        <td>{{ item.lokasi ? item.lokasi : '-' }}</td>
                        <td>{{ item.qty ? item.qty : '-' }}</td>
                        <td>
                            <input
                            type="text"
                            class="form-control"
                            required
                            v-model="item.kuantiti"
                            />
                        </td>
                        <td>{{ item.satuan ? item.satuan : '-' }}</td>
                        <td>
                            <input
                            type="text"
                            class="form-control"
                            v-model="item.keterangan"
                            />
                        </td>
                        <td>
                            {{ item.kuantiti > item.qty ? 'Tidak Terpenuhi' : 'Terpenuhi' }}
                        </td>
                       <td class="py-2">
                        <CButton
                            color="danger"
                            variant="outline"
                            square
                            size="sm"
                            @click="remove( index)"
                        >
                            Delete
                        </CButton>
                        </td>
                    </tr>
                </table>
               
                <button type="button" class="btn btn-sm btn-info ml-auto mb-3" @click="add">
                    Tambah
                </button>
            </div>
            <div class="form-row">
                <button type="submit" class="btn btn-sm btn-success ml-auto" >
                    Simpan Permintaan
                </button>
            </div>
            
          </form>
      </CCardBody>
   
    </CCard>
</template>
<script>
import PermintaanService from "../../services/permintaan/PermintaanService" 
import BarangService from "../../services/barang/BarangService" 
import { AlertUtils } from "../../services/AlertUtils";

const fields = [
  { key: 'barang', _style:'min-width:200px' },
  { key: 'lokasi', _style:'min-width:100px;' },
  { key: 'qty', label : 'Tersedia', _style:'min-width:100px;' },
  { key: 'kuantiti', _style:'min-width:100px;' },
  { key: 'satuan', _style:'min-width:100px;' },
  { key: 'keterangan', _style:'min-width:100px;' },
  { key: 'status', _style:'min-width:100px;' },
  { 
    key: 'action', 
    label: '', 
    _style: 'width:1%', 
    sorter: false, 
    filter: false
  }
]

export default {
  mixins : [AlertUtils],
  name: 'AdvancedTables',
  data () {
    return {
      items: [],
      barang : [],
      peminta: [],
      formData : {
          id_user : '',
          nama : '',
          departemen : '',
          tanggal_permintaan : '',
          modelPeminta : [],
          items : [
              {
                  id_barang : '',
                  modelBarang : [],
                  lokasi : '',
                  qty : 0,
                  kuantiti : 0,
                  satuan : '',
                  keterangan : '',
                  status : ''
              }
          ]
      },
      fields,
      details: [],
      collapseDuration: 0
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    postData() {
        var status = true;
        var vm = this;
        this.formData.items.forEach(item => {
            if(item.kuantiti > item.qty  ) {
              status = false;
            }
        })
        if(!status) {
          vm.alertError("Kuantiti Tersedia Tidak Terpenuhi")
          return false;
        }
        PermintaanService.postData(this.formData)
        .then(response => {
            this.alertSuccess();
            this.$router.push('/dashboard')
        })
    },
    pilihUser(value) {
        this.formData.id_user = value ? value.id : '';
        this.formData.nama = value ? value.name : '';
        this.formData.departemen = value ? value.departement : '';
    },
    pilihBarang(k, value) {
        var data = value ? value.id : ''
        var status = 0
        for (
            let index = 0;
            index < this.formData.items.length;
            index++
        ) {
            var idBarang = this.formData.items[index].id_barang;
            var idSelectBarang = data;

            if (idBarang == idSelectBarang) {
                this.alertError("Tidak Boleh Ada Barang Yang Sama");
                status = 1
                this.formData.items[k].modelBarang = []
                return false;
            }
        }
        if(status == 0) {
             this.formData.items[k].id_barang = value ? value.id : '';
            this.formData.items[k].lokasi = value ? value.lokasi : '';
            this.formData.items[k].qty = value ? value.kuantiti : '';
            this.formData.items[k].satuan = value ? value.satuan : '';
        }
       
    },
    add() {
      this.formData.items.push({
        id_barang : '',
        modelBarang : [],
        lokasi : '',
        kuantiti : 0,
        satuan : '',
        keterangan : '',
        status : ''
      });

      return false;
    },

    remove(index) {
      if(this.formData.items.length == 1) {
            this.alertError("Minimal 1 Barang")
        }
        this.formData.items.splice(index, 1);
    },

    getData() {
      PermintaanService.getAllPeminta()
      .then(response => {
        this.peminta = response.data.user
      })
      BarangService.getData()
      .then(response => {
        this.barang = response.data.data
      })
    },
    getBadge (status) {
      switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: 'primary'
      }
    },
    toggleDetails (item) {
      this.$set(this.items[item.id], '_toggled', !item._toggled)
      this.collapseDuration = 300
      this.$nextTick(() => { this.collapseDuration = 0})
    }
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>