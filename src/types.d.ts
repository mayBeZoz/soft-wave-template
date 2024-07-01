type Children = {
    readonly children: React.ReactNode
}

type MenuProviderData =  {
    showMenu: boolean,
    toggleShowMenu: () => void
} | undefined