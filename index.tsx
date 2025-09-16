import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Factory, Handshake, Boxes, ShieldCheck, Settings, LogIn, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// Single-file, previewable landing page for the platform.
// Notes:
// - Auth is assumed to live in a separate project/app (e.g., auth.yourdomain.com or /auth route).
// - Replace hrefs with your router links when wiring.
// - Uses Tailwind + shadcn/ui + framer-motion + lucide-react.

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-sky-500/20 ring-1 ring-sky-500/40 grid place-items-center">
              <Factory className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Üretici Platformu</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-white/90 text-white/70">Özellikler</a>
            <a href="#how" className="hover:text-white/90 text-white/70">Nasıl Çalışır?</a>
            <a href="#integrations" className="hover:text-white/90 text-white/70">Entegrasyonlar</a>
            <a href="#faq" className="hover:text-white/90 text-white/70">SSS</a>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" className="hidden md:inline-flex">
              <a href="/auth/login"><LogIn className="mr-2 h-4 w-4"/>Giriş</a>
            </Button>
            <Button asChild className="bg-sky-600 hover:bg-sky-500">
              <a href="/auth/register">Kayıt Ol</a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-4 pt-12 pb-8 md:pt-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight"
            >
              Parça üretimi ve tedarik <span className="text-sky-400">tek platformda</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mt-4 text-white/70 max-w-xl"
            >
              Teklif toplama, sipariş takibi, üretici ağı, e-belge & ödeme entegrasyonları. Yemeksepeti benzeri akışla uçtan uca süreci yönetin.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-6 flex flex-col sm:flex-row gap-3"
            >
              <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-500">
                <a href="/auth/login" className="inline-flex items-center">
                  Hemen Başla <ArrowRight className="ml-2 h-5 w-5"/>
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/15 bg-white/5 hover:bg-white/10">
                <a href="#demo" className="inline-flex items-center">
                  <PlayCircle className="mr-2 h-5 w-5"/> Demo İzle
                </a>
              </Button>
            </motion.div>

            {/* Email capture (opsiyonel) */}
            <motion.form
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex gap-3 max-w-md"
            >
              <Input type="email" placeholder="İş e-postanız" className="bg-white/90 text-slate-900"/>
              <Button type="submit" className="bg-emerald-600 hover:bg-emerald-500">Erken Erişim</Button>
            </motion.form>
          </div>

          {/* Right side visual */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-sky-500/10 blur-2xl"/>
            <Card className="relative border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="text-white/90">Tek Panodan Operasyon</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <FeaturePill icon={<Boxes className="h-4 w-4"/>} title="Teklif Toplama" desc="Çoklu üreticiden hızlı teklif" />
                  <FeaturePill icon={<Handshake className="h-4 w-4"/>} title="Onay & Ödeme" desc="Güvenli onay akışları" />
                  <FeaturePill icon={<Settings className="h-4 w-4"/>} title="Atölye Eşleştirme" desc="Uygun üretici önerisi" />
                  <FeaturePill icon={<ShieldCheck className="h-4 w-4"/>} title="E‑Belge" desc="e‑Fatura / e‑İrsaliye" />
                </div>
                <div className="mt-4 rounded-xl border border-white/10 p-4">
                  <div className="text-xs text-white/60 mb-2">Örnek sipariş akışı</div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-sky-400"/> İhtiyaç tanımlandı</li>
                    <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-sky-400"/> Teklifler toplandı</li>
                    <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-sky-400"/> Onay & Ödeme alındı</li>
                    <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-sky-400"/> Üretim & Teslim</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid md:grid-cols-4 gap-4">
          <FeatureCard icon={<Boxes className="h-5 w-5"/>} title="Sipariş Yönetimi" desc="Durum, belge, mesaj; tek yerden."/>
          <FeatureCard icon={<Handshake className="h-5 w-5"/>} title="Tedarikçi Ağı" desc="Doğru atölyeye hızlı erişim."/>
          <FeatureCard icon={<Settings className="h-5 w-5"/>} title="Otomasyon" desc="Webhooks, API, entegrasyonlar."/>
          <FeatureCard icon={<ShieldCheck className="h-5 w-5"/>} title="Uygunluk" desc="e‑Belge ve denetim uyumu."/>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Nasıl çalışır?</h2>
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          <Step index={1} title="İhtiyaç" desc="CAD/çizim veya açıklama ile talep oluşturun."/>
          <Step index={2} title="Teklif" desc="Ağdaki üreticilerden teklif alın."/>
          <Step index={3} title="Onay & Ödeme" desc="Seçin, onaylayın, güvenle ödeyin."/>
          <Step index={4} title="Üretim" desc="Süreç, kalite ve teslimatı izleyin."/>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section id="integrations" className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Entegrasyonlar</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="border-white/10 bg-white/5">
            <CardHeader><CardTitle className="text-white/90">ERP & Muhasebe</CardTitle></CardHeader>
            <CardContent className="text-sm text-white/70">Logo, Mikro, Netsis, SAP (plan). e‑Belge akışlarıyla tam uyum.</CardContent>
          </Card>
          <Card className="border-white/10 bg-white/5">
            <CardHeader><CardTitle className="text-white/90">Ödeme</CardTitle></CardHeader>
            <CardContent className="text-sm text-white/70">Sanal POS & havale/çek senaryo yönetimi, teminat opsiyonları.</CardContent>
          </Card>
          <Card className="border-white/10 bg-white/5">
            <CardHeader><CardTitle className="text-white/90">Depo & Kargo</CardTitle></CardHeader>
            <CardContent className="text-sm text-white/70">Depo yönetimi, irsaliye, kargo API entegrasyonları (plan).</CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <Card className="border-white/10 bg-gradient-to-r from-sky-600/20 to-emerald-600/20">
          <CardContent className="p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Başlamak için sadece bir hesap yeter</h3>
              <p className="text-white/70 mt-2">Giriş yapın, ilk talebinizi oluşturun; gerisini platform yönetsin.</p>
            </div>
            <div className="flex gap-3">
              <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-500"><a href="/auth/register">Hesap Oluştur</a></Button>
              <Button asChild size="lg" variant="outline" className="border-white/15 bg-white/5 hover:bg-white/10"><a href="/auth/login">Giriş Yap</a></Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-5xl px-4 pb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Sıkça Sorulanlar</h2>
        <div className="space-y-4 text-sm text-white/80">
          <FAQ q="Giriş ve servisler ayrı mı olacak?" a="Evet. Kimlik (auth) ayrı uygulamada; platform çekirdek servisleri başka bir projede koşturulacak. Bu sayfa sadece karşılama/landing."/>
          <FAQ q="SSO veya kurumsal giriş desteklenecek mi?" a="Plan: Google, Microsoft, SAML/SSO. Kurumsal müşteriler için opsiyonel."/>
          <FAQ q="Fiyatlandırma nasıl?" a="Erken erişim için esnek. Üretim hacmine göre kademeli planlar (yakında)."/>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8 text-xs text-white/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Üretici Platformu • Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-4">
            <a href="/legal/kvkk" className="hover:text-white/80">KVKK & Gizlilik</a>
            <a href="/legal/sozlesme" className="hover:text-white/80">Kullanım Koşulları</a>
            <a href="mailto:hello@uretoplatformu.com" className="hover:text-white/80">Destek</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeaturePill({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="flex items-center gap-2 text-white/90">
        {icon}
        <span className="font-medium">{title}</span>
      </div>
      <div className="mt-1 text-xs text-white/60">{desc}</div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <Card className="border-white/10 bg-white/5">
      <CardHeader className="flex flex-row items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-white/5 grid place-items-center border border-white/10">{icon}</div>
        <CardTitle className="text-white/90 text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-white/70 -mt-3">{desc}</CardContent>
    </Card>
  );
}

function Step({ index, title, desc }: { index: number; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-sky-500/20 ring-1 ring-sky-500/40 grid place-items-center font-semibold">{index}</div>
        <div className="font-medium text-white/90">{title}</div>
      </div>
      <p className="mt-2 text-white/70 text-xs">{desc}</p>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-xl border border-white/10 bg-white/5 p-4 open:bg-white/10">
      <summary className="cursor-pointer list-none select-none flex items-center justify-between">
        <span className="font-medium text-white/90">{q}</span>
        <ArrowRight className="transition-transform group-open:rotate-90 h-4 w-4"/>
      </summary>
      <p className="mt-3 text-white/70">{a}</p>
    </details>
  );
}
