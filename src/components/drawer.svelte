<div class="pt-[60px] md:hidden absolute z-10 w-full bg-white px-3 pb-2 rounded-b-xl w-screen">
    <nav class="w-full nav flex flex-col"> 
        <a href="#hero">About <span class="font-semibold border-b-0 float-end">➜</span></a>
        <a href="#projects">Projects <span class="font-semibold border-b-0 float-end">➜</span></a>
        <a href="#blog">Blog <span class="font-semibold border-b-0 float-end">➜</span></a>
        <a href="#contact" class="last">Contact <span class="font-semibold border-b-0 float-end">➜</span></a>
    </nav>
</div>

<style lang="postcss">
    .nav a {
        border-bottom: 1px solid black;
        padding-bottom: 4px;
        padding-left: 8px;
        padding-right: 8px;
    }
    .last {
        border-bottom: none;
    }
    a > span {
        visibility: hidden;
    }
    a:hover > span {
        visibility: visible;
    }
</style>