export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Permintaan Barang',
        to: '/dashboard',
        icon: 'cil-speedometer',
      
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Modul']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Barang',
        to: '/Modul/barang',
        icon: 'cil-drop'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Pengguna',
        to: '/Modul/pengguna',
        icon: 'cil-pencil'
      },
      
    ]
  }
]