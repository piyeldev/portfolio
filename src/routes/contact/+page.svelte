<script>
	import { onMount } from "svelte";
    import accessKey from "/src/secrets/api_key.txt?raw";

    function copyEmail() {
        navigator.clipboard.writeText("frankthecrafter23@gmail.com");
    }
</script>

<div class="sm:mt-[120px] mt-[90px] md:mx-6 mx-2">
	<div class="mx-4">
        <h1 class="text-3xl">Get in Touch</h1>
	<p class="text-slate-900">
		Send me a message or details of your project and I'll get back to you as soon as possible.
	</p>
    </div>

	<div class="lg:w-[75%]">
        <div class="bg-slate-100 p-4 pb-8 mt-5 rounded-xl">
            <form action="https://api.web3forms.com/submit" method="post">
                <input type="hidden" name="access_key" value={accessKey} />
                <input type="hidden" name="subject" value="New message/inquire about your service" />
                <input type="hidden" name="from_name" value="Portfolio Contact Page" />
                <h3 class="play-font pb-[3px] border-b-2 border-b-slate-400 text-slate-900 w-fit"
                    >Your info</h3
                >
                <div class="form-group-container flex flex-col gap-2 ml-1 mt-2">
                    <div class="form-group">
                        <label for="name" class="input-label">Your Name<span class="text-red-500 text-[16px]">*</span></label>
                        <input required class="form-input" id="name" name="name" type="text" placeholder="Enter your name..."/>
                    </div>
                    <div class="form-group">
                        <label for="email" class="input-label">Email<span class="text-red-500 text-[16px]">*</span></label>
                        <input required class="form-input" id="email" name="email" type="email" placeholder="e.g someone@example.com"/>
                    </div>
                    <div class="form-group">
                        <label for="website" class="input-label">Your website</label>
                        <input class="form-input" id="website" name="website" type="text" placeholder="e.g example.com"/>
                    </div>
                    <div class="form-group mt-4">
                        <label for="name " class="border-b-2 border-b-slate-400 w-fit play-font mb-2 font-semibold text-slate-900">General message<span class="text-red-500 text-[16px]">*</span></label>
                        <textarea required class="form-input h-32 pt-1 text-sm" name="message" id="msg" placeholder="Type your message here..."></textarea>
                    </div>
                </div>
                <button type="submit" class="rounded-xl mt-8 ml-2 px-3 py-2 bg-[#2c436d] text-white md:text-base text-[16px]">Send message</button>
            </form>
        </div>
        <div class="alternative flex flex-col items-center justify-center mb-16">
            <p>or</p>
            <div class="email-opt flex flex-col items-center">
                <a href="mailto:frankthecrafter23@gmail.com" class="md:text-[18px] text-[16px] text-center text-[#585858]">Message using your favorite email app <span class="italic md:text-[16px] text-[14px]">(tap my email to copy)</span></a>
                <div class="font-light flex items-center">
                    <i class="fa-solid fa-envelope pr-2 text-[#344E5C] md:text-xl text-xs"></i><button
                        class="md:text-base text-[16px]" on:click={copyEmail}
                        >frankthecrafter23@gmail.com  <i class="fa-regular fa-copy text-xs"></i></button
                    >
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="postcss">
    .form-group {
        @apply flex flex-col;
    }
    .input-label {
        @apply text-sm text-slate-800;
    }
    .form-input {
        @apply ml-1 md:p-2 py-1 px-2 leading-tight border-black border-[1px] rounded-xl md:text-xs text-[14px] align-middle;
    }
    .form-input::placeholder {
        @apply  text-[16px];
    }
</style>