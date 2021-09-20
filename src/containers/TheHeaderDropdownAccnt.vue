<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img
            src="img/avatars/6.jpg"
            class="c-avatar-img "
          />
        </div>
      </CHeaderNavLink>
    </template>
  
    <CDropdownItem @click.prevent="logOut">
      <CIcon name="cil-lock-locked"    /> Logout
    </CDropdownItem>
  </CDropdown>
</template>

<script>
export default {
  name: 'TheHeaderDropdownAccnt',
  data () {
    return { 
      itemsCount: 42
    }
  },
  methods : {
    logOut() {
      this.$swal
        .fire({
          title: "Peringatan!",
          text: "Apakah anda yakin ingin keluar?",
          icon: "info",
          showCancelButton: true,
          confirmButtonText: "Ya",
          cancelButtonText: "Tidak",
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          reverseButtons: true
        })
        .then(result => {
          if (result.value) {
            this.$store.dispatch("auth/logout");
            this.$router.push("/pages/login");
          }
        });
    }
  }
}
</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>