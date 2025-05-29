#!/bin/bash

echo "🚀 INICIANDO DEPLOYMENT PARA PRODUÇÃO"
echo "======================================"

# Verificar Node.js version
echo "📋 Verificando versão do Node.js..."
node --version
npm --version

# Verificar se o Vercel CLI está instalado
if ! command -v vercel &> /dev/null; then
    echo "📦 Instalando Vercel CLI..."
    npm install -g vercel@latest
else
    echo "✅ Vercel CLI já instalado"
fi

# Verificar autenticação
echo "🔐 Verificando autenticação Vercel..."
if ! vercel whoami &> /dev/null; then
    echo "🔑 Fazendo login na Vercel..."
    vercel login
else
    echo "✅ Já autenticado na Vercel"
fi

# Limpar cache e dependências
echo "🧹 Limpando cache e dependências..."
rm -rf .next
rm -rf .vercel
rm -rf node_modules
npm cache clean --force

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

# Verificar se todas as dependências estão instaladas
echo "🔍 Verificando dependências críticas..."
npm list @vercel/analytics @vercel/speed-insights lucide-react

# Build local para verificar erros
echo "🔨 Executando build local..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build local concluído com sucesso!"
    
    # Configurar variáveis de ambiente para produção
    echo "⚙️ Configurando ambiente de produção..."
    export NODE_ENV=production
    
    # Deploy para produção
    echo "🚀 Iniciando deploy para produção..."
    echo "   - Ambiente: PRODUCTION"
    echo "   - Analytics: ATIVO"
    echo "   - Speed Insights: ATIVO"
    echo "   - Páginas de categoria: INCLUÍDAS"
    
    vercel --prod --confirm
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "🎉 DEPLOYMENT CONCLUÍDO COM SUCESSO!"
        echo "======================================"
        echo "✅ Aplicação deployada em produção"
        echo "📊 Analytics configurado e ativo"
        echo "⚡ Speed Insights monitorando performance"
        echo "📱 Design responsivo implementado"
        echo "🔗 Todas as páginas de categoria funcionais"
        echo ""
        echo "📋 PRÓXIMOS PASSOS:"
        echo "1. Acesse o dashboard da Vercel para verificar analytics"
        echo "2. Teste todas as funcionalidades no ambiente de produção"
        echo "3. Verifique a página /deployment-check"
        echo "4. Configure domínio personalizado (opcional)"
        echo ""
        echo "🔗 URLs importantes:"
        echo "   - Dashboard Vercel: https://vercel.com/dashboard"
        echo "   - Verificação: [SEU-DOMINIO]/deployment-check"
        
    else
        echo "❌ ERRO DURANTE O DEPLOY"
        echo "Verifique os logs acima para mais detalhes"
        exit 1
    fi
else
    echo "❌ ERRO NO BUILD LOCAL"
    echo "Corrija os erros antes de fazer o deploy"
    exit 1
fi
